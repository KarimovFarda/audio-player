import React, { useEffect } from 'react';
import { useState, useRef, useReducer } from 'react';

function formReducer(acc,item){
  console.log("acc :",acc)
  console.log("item",item)
  if(item.type && item.type === "RESET_FORM"){
    return {}
  }
return {
  ...acc,...item
}
}
const Editform = () => {

const [formState,setFormState] = useReducer(formReducer,
  {fullname : "",email : ""}
)
var pageindex = parseInt((window.location.href).charAt((window.location.href).length - 1))
var amount = localStorage.length;
    function handleFormSubmit(evt){
      amount++
      console.log(localStorage.length)
        evt.preventDefault();
        const formData = new FormData();
        console.log('before submit',formState);
        Object.entries(formState).forEach(item => {
          const [name,value] = item;
          formData.append(name,value)
        })
        console.log(amount)
        fetch("https://randomuser.me/api/?results=33").then(resp => resp.json()).then((console.log))
        localStorage.removeItem(pageindex + 1);
        localStorage.setItem(pageindex + 1,[formState.title,formState.select,formState.fullname,formState.email,formState.username,formState.country]);
    }
    function handleReset(evt){
      setFormState({
        type : "RESET_FORM"
      })
    }
    function handleChange(evt){
        let {value,name,type} = evt.target;
    if ( type === "checkbox"){
        value = evt.target.checked; 
    }       
        setFormState({
                     [name] : value
        }
    )
    }
    return (
        <div class="container w-75 mt-5 p-4 mb-3">
            <h1 style={{textAlign:'center'}} className={'text-info mb-4 mt-4 '}> Change {localStorage.getItem(pageindex + 1).split(',')[2]}'s Data </h1>
        <form onSubmit={handleFormSubmit} onReset={handleReset}>
       <div class="form-group">
        <label className={'font-weight-bold '}>Fullname</label>
        <input name="fullname"  value={formState.fullname} onChange={handleChange} type="text" class="form-control" aria-describedby="emailHelp" placeholder={localStorage.getItem(pageindex + 1).split(',')[2]} required></input>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
        <div class="form-group">
        <label className={'font-weight-bold '}>Email address</label>
        <input onChange={handleChange} name="email" placeholder={localStorage.getItem(pageindex + 1).split(',')[3]} value={formState.email || ''} type="email" class="form-control" aria-describedby="emailHelp" required></input>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div class="form-group">
        <label className={'font-weight-bold '}>Username</label>
        <input onChange={handleChange} value={formState.username || ''} name="username"  type="text" class="form-control"  aria-describedby="emailHelp" placeholder={localStorage.getItem(pageindex + 1).split(',')[4]} required></input>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div class="form-group">
    <label className={'font-weight-bold '} >Gender</label>
    <select  onChange={handleChange} value={formState.gender || ''} name="select" class="form-control">
    <option>-Select one-</option>
      <option>male</option>
      <option>female</option>
      <option>other</option>
      <option>Prefer not to say</option>
    </select>
  </div>
  <div class="form-group">
        <label className={'font-weight-bold '}>Title</label>
        <input onChange={handleChange} value={formState.title || ''} name="title"  type="text" class="form-control"  aria-describedby="emailHelp" placeholder={localStorage.getItem(pageindex + 1).split(',')[0]} required></input>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div class="form-group">
        <label className={'font-weight-bold '}>Country</label>
        <input onChange={handleChange} value={formState.country || ''} type="text" class="form-control" name="country" id="exampleInputPassword1" placeholder={localStorage.getItem(pageindex + 1).split(',')[5]} required></input>
      </div>
      <div class="form-check mb-3">
        <input onChange={handleChange} value={formState.checkbox || ''} type="checkbox" class="form-check-input" name="checkbox" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1">Remember me </label>
      </div>
      <button  type="submit" class="btn btn-danger my-4 font-weight-bold">Save All Changes</button>
          <button type="reset" class="btn btn-info my-4 mx-2 font-weight-bold"> Reset </button>
          <a href="/data" className="btn btn-success  my-4 font-weight-bold"> Continue &rArr; </a>
    </form>
      </div>
    );
}
export default Editform;
