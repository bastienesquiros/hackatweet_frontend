import styles from '../styles/SignUp.module.css';
import Image from 'next/image';

function SignUp() {
	return (
		<div className={styles.container}>
			<div className={styles.signUpCard}>
				<div className={styles.header}>
					<h1 id={styles.cross}>x</h1>
				</div>
				<Image src="/logo.png" width={30} height={30} />
				<h2 id={styles.h2}>Create your hackatweet account</h2>
				<input placeholder="Firstname" className={styles.inputs}></input>
				<input placeholder="Username" className={styles.inputs}></input>
				<input type="password" placeholder="Password" className={styles.inputs}></input>
				<button className={styles.signupButton}>Sign Up</button>
			</div>
		</div>
	);
}

export default SignUp;
