import styles from '../styles/HomeTweet.module.css';

function Tweet() {
	return (
		<div className={styles.tweet}>
			{' '}
			<div className={styles.middle3}>
				<div className={styles.middle4}>
					<Image className={styles.image2} src="/oeuf.png" alt="oeuf" width={250} height={250} />
					<h3 className={styles.name3}>Antoine</h3>
					<h3 className={styles.name4}>@AntoineLeProf</h3>
					<h3 className={styles.moment}> - Now</h3>
				</div>
				<div className={styles.middle5}>
					<p className={styles.comment}>
						Welcome to <span className={styles.hashtag}>#hackatweet </span>
						guys 😎
					</p>
				</div>
				<div className={styles.like}>
					<span className={styles.like2}>
						{personalLike} ({like})
					</span>
					<span className={styles.trash}>
						<FontAwesomeIcon icon={faTrashCan} />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Tweet;
