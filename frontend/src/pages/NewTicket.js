import React from 'react';
import Header from '../component/Header';
import SideNav from '../component/SideNav';
import FormContainer from '../component/FormContainer';
import Footer from '../component/Footer';
import '../styles/NewTicket.css';

const NewTicket = () => {
	return (
		<div>
			<Header />
			<div className="flex">
				<SideNav />
				<FormContainer />
			</div>

			<Footer />
		</div>
	);
};

export default NewTicket;
