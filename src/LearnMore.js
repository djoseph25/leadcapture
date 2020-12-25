import React from 'react';
import Learn from './LearnComponent/Learn';
import Navbar from './Navbar';
import SideBar from './Sidebar';
import Submenu from './Submenu';
const LearnMore = () => {
	return (
		<div className="learn">
			<Navbar />
			<SideBar />
			<Submenu />
			<Learn />
		</div>
	);
};

export default LearnMore;
