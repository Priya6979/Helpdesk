import React from 'react';
import first from '../images/first.png';
import bell from '../images/bell.png';
import user from '../images/user.png';
import download from '../images/download.png';
import '../styles/Header.css';

const Header = () => {
	return (
		<div className="header">
			<div className="logo">Helpdesk</div>
			<div className="icons">
				<img src={first} />
				<img src={bell} />
				<img src={user} />
				<img src={download} />
			</div>
		</div>
	);
};

export default Header;
