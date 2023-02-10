import Image from 'next/image';
import styles from '../styles/HomeTweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Tweet from './Tweet';
import { useSelector } from 'react-redux';

function HomeTweet() {
	const url = 'http://localhost:3000/users/';
	const [like, setLike] = useState();
	const profile_lastname = useSelector((state) => state.users.value.firstname);
	const profile_username = useSelector((state) => state.users.value.username);

	console.log(profile_username);
	const [allTweets, setAlltTweets] = useState([]);
	const addTweet = () => {};
	const getAllTweet = () => {
		fetch(url + 'getAllTweets')
			.then((allTweet) => allTweet.json())
			.then((allTweetsFromFetch) => {
				const tweetsToDisplay = allTweetsFromFetch.allTweets.map((obj) => {
					return <Tweet firstname={obj.firstname} username={obj.firstname} content={obj.tweetContent} hashtags={obj.hashtags} likes={obj.likes} id={obj._id} date={obj.date} />;
				});
				setAlltTweets([...allTweets, tweetsToDisplay]);
			});
	};

	const personalLike = [];
	let style = {};
	const stylered = { color: 'red' };
	const styleblack = { color: '' };
	for (let i = 0; i < 1; i++) {
		if (like) {
			style = stylered;
		} else {
			style = styleblack;
		}

		personalLike.push(<FontAwesomeIcon key={i} icon={faHeart} onClick={() => setLike(like === false)} style={style} className="like" />);
	}

	const handleLogoutClick = () => {
		window.location.href = '/';
	};

	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.up}>
					<Image className={styles.image} src="/logo.png" alt="logo" width={250} height={250} />
				</div>
				<div className={styles.down}>
					<Image className={styles.image2} src="/oeuf.png" alt="oeuf" width={250} height={250} />
					<div className={styles.down2}>
						<h3 className={styles.name}>{profile_lastname}</h3>
						<h3 className={styles.name2}>@{profile_username}</h3>
						<button
							onClick={() => {
								handleLogoutClick();
							}}
							className={styles.button1}
						>
							Logout
						</button>
					</div>
				</div>
			</div>
			<div className={styles.middle}>
				<div className={styles.middle2}>
					<h1 className={styles.title}>Home</h1>
					<div className={styles.textarea}>
						<input className={styles.text} text="text" name="text" placeholder="What's up?" />
					</div>
					<button
						className={styles.button2}
						onClick={() => {
							getAllTweet();
						}}
					>
						Tweet
					</button>
				</div>
				{allTweets}
			</div>
			<div className={styles.right}>
				<div className={styles.right2}>
					<h1 className={styles.title2}>Trends</h1>
					<div className={styles.textarea2}></div>
				</div>
			</div>
		</div>
	);
}

export default HomeTweet;
