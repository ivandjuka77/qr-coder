import React, { useState } from 'react';

import './Form.css';

const Form = () => {
	const [url, setUrl] = useState('');
	const [dimensions, setDimensions] = useState('');

	return (
		<form>
			<label for='url'>URL or Text:</label>
			<input
				type='text'
				placeholder='Enter Your URL/Text'
				id='url'
				value={url}
				onChange={(e) => setUrl(e.target.value)}
			/>
			<br />
			<label for='dimensions'>Size</label>
			<select
				id='dimensions'
				onChange={(e) => setDimensions(e.target.value)}
			>
				<option value='100'>100x100</option>
				<option value='200'>200x200</option>
				<option value='300'>300x300</option>
				<option value='400'>400x400</option>
				<option value='500'>500x500</option>
				<option value='600'>600x600</option>
			</select>
		</form>
	);
};

export default Form;
