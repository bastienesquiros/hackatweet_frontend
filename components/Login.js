import Image from "next/image";
import styles from "../styles/Login.module.css";

function Login() {
	// const [signUp, setSignUp] = useState("");
	// const [signIn, setSignIn] = useState("");

	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<Image
					className={styles.image}
					src="/logo.png"
					alt="logo"
					width={250}
					height={250}
				/>
			</div>
			<div className={styles.right}>
				<Image
					className={styles.image2}
					src="/logo.png"
					alt="logo"
					width={250}
					height={250}
				/>
				<div className={styles.sentence1}>
					<h1 className={styles.h1}>
						See what's<br></br>happening
					</h1>
				</div>
				<div className={styles.sentence3}>
					<h2 className={styles.h2}>Join Hackatweet today.</h2>
				</div>
				<div className={styles.button}>
					<button className={styles.signup}>Sign Up</button>
				</div>
				<div className={styles.sentence4}>
					<h4>Already have an account?</h4>
				</div>
				<div className={styles.button}>
					<button className={styles.signin}>Sign In</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
