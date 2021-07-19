import React from 'react';
import './logincss.css';

const login = () => {
    return (
        <div id="login" class="login-form">
             <form action={'/form'} id="formlogin">
            <h1> LOG IN</h1>  
        <label> Username  (admin) </label>
        <span>  </span>
        <input id="name" type="text" placeholder="Your Username"/>
        <label>Password  (admin)</label>
        <span> </span>
        <input id="password" type="password" placeholder="Your Password"/> 
        <a href="#"> Forgot the password?</a>
        <button type="submit"> Sign In
        </button>
        </form>
        </div>
    );
    
}

export default login;
