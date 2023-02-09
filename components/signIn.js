import Image from 'next/image';
import styles from '../styles/SignIn.module.css';

function SignIn() {
	return (
		<div className={styles.container}>
			<div className={styles.signUpCard}>
				<div className={styles.header}>
					<h1 id={styles.cross}>x</h1>
				</div>
				<Image src="/logo.png" width={30} height={30} />
				<h2 id={styles.h2}>Connect to Hackatweet</h2>
				<input placeholder="Username" className={styles.inputs}></input>
				<input type="password" placeholder="Password" className={styles.inputs}></input>
				<button className={styles.signupButton}>Sign In</button>
			</div>
		</div>
	);
}

export default SignIn;
