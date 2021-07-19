import React, { useState, useEffect } from 'react';
import DataTable from './DataTable/data';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import Login from './LoginForm/login'
import Customer from './DataTable/customer';
import Dbform from './DataBaseForm/dbform';
import Editform from "./DataBaseForm/editform"
import NewData from './DataTable/newdata';
export default function Users() {
    const headers = [
        {id : "index",label : "#",sortable:false},
        {id : "title",label : "Title",sortable:false},
        {id : "gender",label : "Gender",sortable:false},
        {id : "fullname",label : "Full name",sortable:false},
        {id : "email",label : "Email",sortable:true},
        {id : "country",label : "Country",sortable:false},
        {id : "username",label : "Username",sortable:false}, 
        {id : "details",label : "More Info",sortable:false}, 
        {id : "edit",label : "Edit",sortable:false} 

    ];
    const [users,setUsers] = useState([])
    useEffect(() => {fetch('https://randomuser.me/api/?results=33')
        .then(resp => resp.json())
        .then(({results}) => setUsers(results))
        .catch(err => console.log(err))
    }, []);


    const ProtectedRoute = ({children,...rest}) => {
        return <Route {...rest}>
            {children}
        </Route>
    }
    return (
        <div class="container">
        <div className="mt-5">
           <BrowserRouter>
        <Switch>
        <Route path="/data" exact>
            <DataTable records={users} headers={headers}/>
        </Route>
        <Route path="/newdata" exact>
            <NewData records={users} headers={headers}/>
        </Route>
        <Route path="/form">
            <Dbform/>
        </Route>
        <Route path="/data/:id">
            <Customer />
        </Route>
        <Route path="/edit/:id">
            <Editform />
        </Route>
        <Route path="/">
        <Login />
        </Route>
        <Redirect />
        </Switch>
           </BrowserRouter>
           
        </div>
        </div>
    )
}