import { useState } from 'react'
import styles from '../styles/SignUp.module.css'

function SignUp(){
    const [firstname,setFirstName]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const signupHandleClick=()=>{
        fetch('http://localhost:3000/users/signup',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: firstname,username:username, password: password }),
            }).then(data=>data.json()).then(res=>{
                if(res.result){
                    window.location.href = '/homeTweets';
                }
            })
    }
    return(
    <div className={styles.container}>
        <div className={styles.signUpCard}>
            <div className={styles.header}>
                <h1 id={styles.cross}>x</h1>
            </div>
            <h2 id={styles.h2}>A</h2>
            <h2 id={styles.h2}>Create your hackatweet account</h2>
            <input onChange={(e)=>{setFirstName(e.target.value)}} value={firstname} className={styles.inputs}/>
            <input onChange={(e)=>{setUsername(e.target.value)}} value={username} className={styles.inputs}/>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password}  className={styles.inputs} type="password"/>
            <button onClick={()=>{signupHandleClick()}} className={styles.signupButton} >Sign Up</button>
        </div>
    </div>
    )
    
}

export default SignUp; 