import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Login from './Login';
import { useGlobalContext } from './context';

function Navbar() {
	const { logout, isAuthenticated, openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
	const displaySubmenu = (e) => {
		const page = e.target.textContent;
		// Getting button location need center and botton
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;
		openSubmenu(page, { center, bottom });
	};

	const handleSubmenu = (e) => {
		if (!e.target.classList.contains('link-btn')) {
			closeSubmenu();
		}
	};

	return (
		<nav className="nav" onMouseOver={handleSubmenu}>
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img
							src="https://www.pngjoy.com/pngl/358/6666557_liberty-mutual-logo-liberty-mutual-insurance-logo-white.png"
							className="nav-logo"
							alt="logo"
							style={{ width: 200 }}
						/>
					</Link>
					<button className="btn toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<Link to="/">
						<button className="link-btn" onMouseOver={displaySubmenu}>
							Home
						</button>
					</Link>
					<Link to="/HealthQuotes">
						<button className="link-btn" onMouseOver={displaySubmenu}>
							Get Insurance
						</button>
					</Link>
					<Link to="/LearnMore">
						<button className="link-btn" onMouseOver={displaySubmenu}>
							Learn More
						</button>
					</Link>
					<Link to="/AdminUser/AdminUser">
						<button className="link-btn">Members</button>
					</Link>
				</ul>
				{!isAuthenticated ? (
					<Login />
				) : (
					<button onClick={logout} className="btn btn-signin">
						Logout
					</button>
				)}
			</div>
		</nav>
	);
}

export default withRouter(Navbar);
