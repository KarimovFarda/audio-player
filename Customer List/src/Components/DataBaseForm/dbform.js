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
const Dbform = () => {
const [formState,setFormState] = useReducer(formReducer,
  {fullname : "",email : ""}
)
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
        localStorage.setItem(amount,[formState.title,formState.select,formState.fullname,formState.email,formState.username,formState.country]);
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
    function handleDelete(){
      localStorage.removeItem(1);
      localStorage.setItem(1,)
    }
    return (
        <div style={{border:"1px solid black"}} class="container w-75 mt-5 mb-3">
          <h1 style={{textAlign:'center'}} className="my-4 py-2 bg-danger text-white"> Data Entry Form </h1>
        <form  onSubmit={handleFormSubmit} onReset={handleReset} autoComplete={'on'} >
       <div class="form-group">
        <label htmlFor="fullname" className={'font-weight-bold'}>Fullname</label>
        <input name="fullname"  value={formState.fullname } onChange={handleChange} type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Fullname *" minLength={3} maxLength={20} required></input>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
        <div class="form-group">
        <label htmlFor="email" className={'font-weight-bold'}>Email address</label>
        <input onChange={handleChange} name="email" value={formState.email || ''} type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email *" minLength={6} maxLength={20} required></input>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div class="form-group">
        <label htmlFor="username" className={'font-weight-bold'}>Username</label>
        <input onChange={handleChange} value={formState.username || ''} name="username"  type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Username *" minLength={6} maxLength={20}  required></input>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div class="form-group">
    <label className={'font-weight-bold'}>Gender</label>
    <select onChange={handleChange} value={formState.gender || ''} name="select" className="p-2 text-secondary form-select border w-100">
    <option>-Select one-</option>
      <option>male</option>
      <option>female</option>
      <option>other</option>
      <option>Prefer not to say</option>
    </select>
  </div>
       <div class="form-group">
        <label htmlFor="title" className={'font-weight-bold'} >Title</label>
        <input onChange={handleChange} value={formState.title || ''} name="title"  type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter title(Mr /Ms /Mrs /Miss /Madame ) *"  required></input>
        <small id="emailHelp" class="form-text text-muted">{"We'll never share your email with anyone else."}</small>
       </div>
       <div class="form-group">
        <label htmlFor="country" className={'font-weight-bold'}>Country</label>
        <input onChange={handleChange} value={formState.country || ''} type="text" class="form-control" name="country" id="exampleInputPassword1" placeholder="Country" minLength={5} maxLength={15}  required></input>
      </div>
      <div class="form-check">
        <input onChange={handleChange} value={formState.checkbox || ''} type="checkbox" class="form-check-input" name="checkbox" id="exampleCheck1"></input>
        <label className="form-check-label font-weight-bold" >Remember me </label>
      </div>
      <button type="submit" className="btn btn-danger my-4 w-20 font-weight-bold">Save All Changes</button>
          <button type="reset" class="btn btn-info my-3 mx-3 font-weight-bold"> Reset </button>
          <a href="/data"  className=" btn btn-success  font-weight-bold"> Continue &rArr; </a>
    </form>
      </div>
    );
}

export default Dbform;
