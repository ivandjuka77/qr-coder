import React from 'react';

import './Header.css';

const Header = () => {
	return (
		<nav className='navbar'>
			<a href='.'>
				<img
					src={require('../../assets/nav-icon.png')}
					alt='nav-icon'
					className='nav-icon'
				/>
				<span className='nav-title'>QR Coder</span>
			</a>
		</nav>
	);
};

export default Header;
