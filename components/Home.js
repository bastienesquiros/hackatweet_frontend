import styles from "../styles/Home.module.css";
import SignUp from "./signUp";
function Home() {
	return (
		<div className={styles.container}>
			<SignUp />
		</div>
	);
}

export default Home;
