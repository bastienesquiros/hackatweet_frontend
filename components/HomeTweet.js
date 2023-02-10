import Image from 'next/image';
import styles from '../styles/HomeTweet.module.css';

function HomeTweet() {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.up}>
					<Image className={styles.image} src="/logo.png" alt="logo" width={250} height={250} />
				</div>
				<div className={styles.down}>
					<Image className={styles.image2} src="/oeuf.png" alt="oeuf" width={250} height={250} />
					<div className={styles.down2}>
						<h3 className={styles.name}>John</h3>
						<h3 className={styles.name2}>@JohnCena</h3>
						<button className={styles.button1}>Logout</button>
					</div>
				</div>
			</div>
			<div className={styles.middle}>
				<div className={styles.middle2}>
					<h1 className={styles.title}>Home</h1>
					<div className={styles.textarea}>
						<input className={styles.text} text="text" name="text" placeholder="What's up?" />
					</div>
					<button className={styles.button2}>Tweet</button>
				</div>
			</div>
			<div className={styles.right}></div>
		</div>
	);
}

export default HomeTweet;
