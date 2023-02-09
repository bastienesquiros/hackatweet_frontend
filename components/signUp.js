import { useState } from 'react'
import styles from '../styles/SignUp.module.css';
import Image from 'next/image';

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
            <Image src="/logo.png" width={30} height={30} />
            <h2 id={styles.h2}>Create your hackatweet account</h2>
            <input placeholder="Firstname" onChange={(e)=>{setFirstName(e.target.value)}} value={firstname} className={styles.inputs}/>
            <input placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} value={username} className={styles.inputs}/>
            <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password}  className={styles.inputs} type="password"/>
            <button onClick={()=>{signupHandleClick()}} className={styles.signupButton} >Sign Up</button>
        </div>
    </div>
    )
    
}

export default SignUp;
