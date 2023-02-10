import Image from "next/image";
import styles from "../styles/HomeTweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Tweet from "./Tweet";

function HomeTweet() {
	const [like, setLike] = useState();

	const personalLike = [];
	let style = {};
	const stylered = { color: "red" };
	const styleblack = { color: "" };
	for (let i = 0; i < 1; i++) {
		if (like) {
			style = stylered;
		} else {
			style = styleblack;
		}

		personalLike.push(
			<FontAwesomeIcon
				key={i}
				icon={faHeart}
				onClick={() => setLike(like === false)}
				style={style}
				className="like"
			/>
		);
	}

	const handleLogoutClick = () => {
		window.location.href = "/";
	};

	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.up}>
					<Image
						className={styles.image}
						src="/logo.png"
						alt="logo"
						width={250}
						height={250}
					/>
				</div>
				<div className={styles.down}>
					<Image
						className={styles.image2}
						src="/oeuf.png"
						alt="oeuf"
						width={250}
						height={250}
					/>
					<div className={styles.down2}>
						<h3 className={styles.name}>John</h3>
						<h3 className={styles.name2}>@JohnCena</h3>
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
						<input
							className={styles.text}
							text="text"
							name="text"
							placeholder="What's up?"
						/>
					</div>
					<button className={styles.button2}>Tweet</button>
				</div>
				<div className={styles.middle3}>
					<div className={styles.middle4}>
						<Image
							className={styles.image2}
							src="/oeuf.png"
							alt="oeuf"
							width={250}
							height={250}
						/>
						<h3 className={styles.name3}>Antoine</h3>
						<h3 className={styles.name4}>@AntoineLeProf</h3>
						<h3 className={styles.moment}> - Now</h3>
					</div>
					<div className={styles.middle5}>
						<p className={styles.comment}>
							Welcome to{" "}
							<span className={styles.hashtag}>#hackatweet </span>
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
