import React, { useState } from 'react';

import './Form.css';

const Form = ({ getData }) => {
	const [url, setUrl] = useState('');
	const [dimensions, setDimensions] = useState(0);

	const data = {
		url: url,
		dimensions: dimensions,
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(data);
		getData(data);
	};
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor='url'>URL or Text:</label>
			<input
				type='text'
				placeholder='Enter Your URL/Text'
				id='url'
				value={url}
				onChange={(e) => setUrl(e.target.value)}
			/>
			<label htmlFor='dimensions'>Size</label>
			<select
				id='dimensions'
				onChange={(e) => setDimensions(e.target.value)}
			>
				<option value='100'>100x100</option>
				<option value='128'>128x128</option>
				<option value='200'>200x200</option>
				<option
					value='256'
					defaultValue
				>
					256x256
				</option>
				<option value='300'>300x300</option>
				<option value='400'>400x400</option>
			</select>
			<button>Generate</button>
		</form>
	);
};

export default Form;
