import Image from 'next/image';
import styles from '../styles/Login.module.css';

import { Button, Modal } from 'antd';
import { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';

function Login() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const [isModalOpen2, setIsModalOpen2] = useState(false);
	const showModal2 = () => {
		setIsModalOpen2(true);
	};
	const handleOk2 = () => {
		setIsModalOpen2(false);
	};
	const handleCancel2 = () => {
		setIsModalOpen2(false);
	};

	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<Image className={styles.image} src="/logo.png" alt="logo" width={250} height={250} />
			</div>
			<div className={styles.right}>
				<Image className={styles.image2} src="/logo.png" alt="logo" width={250} height={250} />
				<div className={styles.sentence1}>
					<h1 className={styles.h1}>
						See what's<br></br>happening
					</h1>
				</div>
				<div className={styles.sentence3}>
					<h2 className={styles.h2}>Join Hackatweet today.</h2>
				</div>
				<div className={styles.button}>
					<button onClick={showModal2} className={styles.signup}>
						Sign Up
					</button>
					<Modal
						maskStyle={false}
						style={{ backgroundColor: '#27323E', border: '0px', borderRadius: '50%' }}
						bodyStyle={{ borderRadius: '50%', backgroundColor: 'white', padding: '0px', height: '100%' }}
						footer={null}
						maskClosable={true}
						width={'30%'}
						height={'35%'}
						open={isModalOpen2}
						className="modalStyle"
						onOk={handleOk2}
						onCancel={handleCancel2}
					>
						<Signup />
					</Modal>
				</div>
				<div className={styles.sentence4}>
					<h4>Already have an account?</h4>
				</div>
				<div className={styles.button}>
					<button onClick={showModal} className={styles.signin}>
						Sign In
					</button>
					<Modal
						maskStyle={false}
						style={{ backgroundColor: '#27323E', border: '0px', borderRadius: '50%' }}
						bodyStyle={{ borderRadius: '50%', backgroundColor: 'white', padding: '0px', height: '100%' }}
						footer={null}
						maskClosable={true}
						width={'30%'}
						height={'35%'}
						open={isModalOpen}
						className="modalStyle"
						onOk={handleOk}
						onCancel={handleCancel}
					>
						<Signin />
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default Login;
