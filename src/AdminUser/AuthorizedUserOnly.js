import React from 'react';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import Submenu from '../Submenu';

const AuthorizedOnly = () => {
	return (
		<>
			<Navbar />
			<SideBar />
			<Submenu />
			<h3 className="insurance">Authorized User Only Please login</h3>
		</>
	);
};

export default AuthorizedOnly;
