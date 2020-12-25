import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';
import dental from './png/dental.png';
import heart from './png/hearth.png';
import planner from './png/planner.png';
import life from './png/life-insurance.png';
import Navbar from './Navbar';
import SideBar from './Sidebar';
import Submenu from './Submenu';

const LandingPage = () => {
	const { closeSubmenu } = useGlobalContext();

	return (
		<>
			<Navbar />
			<SideBar />
			<Submenu />
			<section className="insurance" onMouseOver={closeSubmenu}>
				<h2>Get 2021 Insurance Coverage!</h2>
				<Link to="/Home/HealthQuotes">
					<button className="get-quote">Get A Quote Now</button>
				</Link>
				<div className="links">
					<Link to="Home/HealthQuotes">
						<img src={planner} alt={planner} className="img" />
						<div>Health</div>
					</Link>
					<Link to="Home/DentalQuotes">
						<img src={dental} alt={dental} className="img" />
						<div>Dental</div>
					</Link>

					<Link to="Home/MedicareQuotes">
						<img src={heart} alt={heart} className="img" />
						<div>Medicare</div>
					</Link>
					<Link to="Home/LifeQuotes">
						<img src={life} alt={life} className="img" />
						<div>Life</div>
					</Link>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
