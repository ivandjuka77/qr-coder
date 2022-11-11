import React, { useState } from 'react';

import QRCode from 'react-qr-code';

import Form from '../Form/Form';

import './Main.css';

const Main = () => {
	const [data, setData] = useState(0);

	const getData = (formData) => {
		setData(formData);
	};

	// from https://github.com/rosskhanas/react-qr-code/blob/master/demo/src/components/App.js
	const onImageCownload = () => {
		const svg = document.getElementById('QRCode');
		const svgData = new XMLSerializer().serializeToString(svg);
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const img = new Image();
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0);
			const pngFile = canvas.toDataURL('image/png');
			const downloadLink = document.createElement('a');
			downloadLink.download = 'QRCode';
			downloadLink.href = `${pngFile}`;
			downloadLink.click();
		};
		img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
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
				{data !== 0 ? (
					<div className='main-qr-div'>
						<QRCode
							value={data.url || ''}
							className='main-qr'
							id='QRCode'
							size={data.dimensions || 256}
						/>
						<button
							className='main-qr-btn'
							onClick={onImageCownload}
						>
							Download QR Code
						</button>
					</div>
				) : (
					<img
						src={require('../../assets/qr-placeholder.png')}
						alt='placeholder'
						className='main-qr-placeholder'
					/>
				)}
			</div>
		</div>
	);
};

export default Main;
