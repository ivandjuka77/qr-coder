import React from 'react';

import QRCode from 'react-qr-code';

import Form from '../Form/Form';

import './Main.css';

const Main = () => {
	return (
		<div className='main'>
			<div className='main-inner'>
				<div className='main-form-text'>
					<h1>Generate your QR Code in seconds!</h1>
					<p>
						1. Put your URL/Text and the size below <br />
						2. Viola! Your QR Code will appear on the left. <br />
						3. You can download it by clicking the button below the QR Code
					</p>
					<br />
					<Form />
				</div>
				<div className='main-qr-div'>
					<QRCode
						value='https://www.youtube.com/watch?v=qNiUlml9MDk&t=727s&ab_channel=TraversyMedia'
						className='main-qr'
						size={256}
					/>
					<button className='main-qr-btn'>Download QR Code</button>
				</div>
			</div>
		</div>
	);
};

export default Main;
