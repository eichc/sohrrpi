"use client";
import React, { useState } from 'react';
import styles from './login.module.css';


const LoginSignup = () => {
    const [action, setAction] =  useState("Login");

    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>{action}</div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.inputs}>
                {action==="Login"?<div></div>:<div className={styles.input}>
                <img src="" alt="" />
                <input type = "text" placeholder='Name'/>
            </div>}
            
            <div className={styles.input}>
                <img src="" alt="" />
                <input type = "email" placeholder='Email' />
            </div>
            <div className={styles.input}>
                <img src="" alt="" />
                <input type = "password" placeholder='Password'/>
            </div>
            </div>
            {action === "Sign Up"?<div></div>:<div className={styles.forgotpass}>Lost Password? <span>Click Here!</span></div>}
            <div className={styles.submitcontainer}>
                <div className={action==="Login"?styles.submit_gray:styles.submit} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>   
                <div className={action==="Sign Up"?styles.submit_gray:styles.submit} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
            </div>
    )
}

export default LoginSignup