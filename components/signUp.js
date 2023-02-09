import styles from '../styles/SignUp.module.css'

function SignUp(){
    return(
    <div className={styles.container}>
        <div className={styles.signUpCard}>
            <div className={styles.header}>
                <h1 id={styles.cross}>x</h1>
            </div>
            <h2 id={styles.h2}>A</h2>
            <h2 id={styles.h2}>Create your hackatweet account</h2>
            <input className={styles.inputs}></input>
            <input className={styles.inputs}></input>
            <input className={styles.inputs}></input>
            <button className={styles.signupButton}>Sign Up</button>
        </div>
    </div>
    )
    
}

export default SignUp; 