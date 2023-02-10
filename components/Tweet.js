import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';

function Tweet(props) {
	const url = 'http://localhost:3000/users/';
	const [like, setLike] = useState(false);

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

		personalLike.push(<FontAwesomeIcon key={i} icon={faHeart} onClick={() => setLike(!like)} style={style} className="like" />);
	}

	return (
		<div className={styles.middle3}>
			<div className={styles.middle4}>
				<Image className={styles.image2} src="/oeuf.png" alt="oeuf" width={250} height={250} />
				<h3 className={styles.name3}>{props.firstname}</h3>
				<h3 className={styles.name4}>{props.username}</h3>
				<h3 className={styles.moment}> - Now</h3>
			</div>
			<div className={styles.middle5}>
				<p className={styles.comment}>
					{props.content}
					{/* <span className={styles.hashtag}>#hackatweet </span> */}
				</p>
			</div>
			<div className={styles.like}>
				<span className={styles.like2}>
					{personalLike} {props.likes}
				</span>
				<span className={styles.trash}>
					<FontAwesomeIcon icon={faTrashCan} />
				</span>
			</div>
		</div>
	);
}

export default Tweet;
