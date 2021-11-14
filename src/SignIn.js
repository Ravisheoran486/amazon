
import React, { useState } from 'react';
import './SignIn.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function SignIn() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const signIn = e =>{
        e.preventDeafult();
    }

    const register = e =>{
        e.preventDeafult();
        // auth
        //     .createUserWithEmailAndPassword(email , password)
        //     .then((auth)=>{
        //         console.log(auth);
        //     })
    }
    return (
         
        
            <div className="signin">
                
                <img className='app__logo' src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                <div className='login__container' >
                    <h1>Sign In</h1>
                    <form>
                        <h5>Email(phone for mobile account)</h5>
                        <input type='text' value= {email} onChange= {e => setemail(e.target.value)} />
                        
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setpassword(e.target.value)} />
                        <button type='submit' onClick={signIn} >Sign-In</button>
                    </form>
                    <p>By continuing, you agree terms and condition of amazon,please read all the following documents related</p>

                    <button onClick={register}>Create New Account</button>
                </div>


            
        </div>
    )
}

export default SignIn
