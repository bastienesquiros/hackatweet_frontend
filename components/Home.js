import styles from '../styles/Home.module.css';
import SignUp from './Signup';
function Home() {
  return (
    <div className={styles.container}>
      <SignUp/>
    </div>
  );
}

export default Home;
