import React from 'react';
import Form from '../Form/Form';
import QRCode from 'react-qr-code';

import './Main.css';

const Main = () => {
	return (
		<div className='main'>
			<div className='main-inner'>
				<div className='main-left'>
					<div className='main-text'>
						<h1>Generate your QR Code in seconds!</h1>
						<p>
							1. Put your URL/Text and the size below <br />
							2. Viola! Your QR Code will appear on the left. <br />
							3. You can download it by clicking the button below the QR Code
						</p>
					</div>

					<Form />
				</div>
				<QRCode value='' />
			</div>
		</div>
	);
};

export default Main;
