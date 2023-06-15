import React from 'react';
import DashboardLayout from '../images/DashboardLayout.png';
import NewTicket from '../images/NewTicket.png';
import TwoTickets from '../images/TwoTickets.png';
import '../styles/SideNav.css';

const SideNav = () => {
	return (
		<div className="sideNav">
			<span className="icon-media">
				{' '}
				<img src={DashboardLayout} />
				<h1>DashBoard</h1>
			</span>
			<span className="icon-media">
				{' '}
				<img src={NewTicket} />
				<h1>NewTicket</h1>
			</span>
			<span className="icon-media">
				{' '}
				<img src={TwoTickets} />
				<h1>MyTicket</h1>
			</span>
		</div>
	);
};

export default SideNav;
