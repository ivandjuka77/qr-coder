import React, { useState } from 'react';

import QRCode from 'react-qr-code';

import Form from '../Form/Form';

import './Main.css';

const Main = () => {
	const [data, setData] = useState({});

	const getData = (formData) => {
		setData(formData);
	};
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
					<Form getData={getData} />
				</div>
				<div className='main-qr-div'>
					<QRCode
						value={data.url || ''}
						className='main-qr'
						size={data.dimensions || 256}
					/>
					<button className='main-qr-btn'>Download QR Code</button>
				</div>
			</div>
		</div>
	);
};

export default Main;
