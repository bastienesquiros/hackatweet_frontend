import Image from 'next/image';
import styles from '../styles/SignIn.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCreditentialsToStore } from '../reducers/users';

function SignIn() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [firstname, setFirstName] = useState('');
	const dispatch = useDispatch();
	const signInHandleClick = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: username, password: password }),
		})
			.then((data) => data.json())
			.then((res) => {
				if (res.result) {
					window.location.href = '/homeTweets';
				}
			});
		dispatch(addCreditentialsToStore({ username: username, firstname: firstname }));
	};
	return (
		<div className={styles.container}>
			<div className={styles.signUpCard}>
				<div className={styles.header}></div>
				<Image src="/logo.png" width={35} height={30} />
				<h2 id={styles.h2}>Connect to Hackatweet</h2>
				<input onChange={(e) => setUsername(e.target.value)} placeholder="Username" className={styles.inputs}></input>
				<input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className={styles.inputs}></input>
				<button
					onClick={() => {
						signInHandleClick();
					}}
					className={styles.signupButton}
				>
					Sign In
				</button>
			</div>
		</div>
	);
}

export default SignIn;
