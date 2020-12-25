import React from 'react';
import { useGlobalContext } from '../context';
import Graph from './Graph';
import Graph2 from './HealthGraph';
import Graph3 from './LifeGraph';
import Graph4 from './Dentalgraph';
import Graph5 from './Medicaregraph';
import Profile from './Profile';

import { Col, Row, Container, Card } from 'reactstrap';

function Admin() {
	const { posts, removePost } = useGlobalContext();

	return (
		<>
			<div className="grid-container">
				<div className="menu-icon">
					<i className="fas fa-bars header__menu"></i>
				</div>

				<header className="header">
					<div className="header__search">
						{' '}
						<img
							src="https://www.pngjoy.com/pngl/358/6666557_liberty-mutual-logo-liberty-mutual-insurance-logo-white.png"
							className="nav-logo"
							alt="logo"
							style={{ width: 150 }}
						/>
					</div>
					<div className="header__avatar">
						<Profile />
					</div>
				</header>

				<aside className="sidenav">
					<div className="sidenav__close-icon">
						<i className="fas fa-times sidenav__brand-close"></i>
					</div>
					<ul className="sidenav__list">
						<div className="Image-border">
							<img
								src="https://images.unsplash.com/photo-1585675100414-add2e465a136?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
								alt="profile pic"
								className="profile"
							/>
						</div>
						<li className="sidenav__list-item">Leads</li>
						<li className="sidenav__list-item">Health</li>
						<li className="sidenav__list-item">Life</li>
						<li className="sidenav__list-item">Medicare</li>
						<li className="sidenav__list-item">Medicare</li>
					</ul>
				</aside>

				{/* Body */}
				<Container style={{ backgroundColor: 'whitesmoke' }}>
					<Row style={{ paddingTop: 20 }} className="card-row">
						<Col md={6} lg={3}>
							<Card className="card one">
								<Graph2 />
							</Card>
							Health
						</Col>
						<Col md={6} lg={3}>
							<Card className="card two">
								<Graph4 />
							</Card>
							Dental
						</Col>
						<Col md={6} lg={3}>
							<Card className="card three">
								<Graph5 />
							</Card>
							Medicare
						</Col>
						<Col md={6} lg={3}>
							<Card className="card four">
								<Graph3 />
							</Card>
							Life
						</Col>
					</Row>
					<Row style={{ paddingBottom: 500 }}>
						<Graph />
					</Row>
					<Row>
						<Col className="table">
							<table>
								<thead>
									<tr>
										<th>Type</th>
										<th>Name</th>
										<th>Gender</th>
										<th>DOB</th>
										<th>H</th>
										<th>W</th>
										<th>Zip</th>
										<th>Income</th>
										<th>HSize</th>
										<th>Phone</th>
										<th>Email</th>
										<th>Qualify</th>
										<th>Smoker</th>
										<th>HCondition</th>
										<th>MStatus</th>
										<th>MProducts</th>
										<th>Delete</th>
									</tr>
								</thead>
								<tbody style={{ fontSize: 13 }}>
									{posts.map((user) => {
										return (
											<tr style={{ color: 'black' }} className="user" key={user.Type}>
												<td>{user.Type}</td>
												<td>{user.FullName}</td>
												<td>{user.Gender}</td>
												<td>{user.BirthDay}</td>
												<td>{user.Height === '' ? 'N/A' : user.Height}</td>
												<td>{user.Weight === '' ? 'N/A' : user.Weight}</td>
												<td>{user.ZipCode}</td>
												<td>{user.HouseHoldIncome === '' ? 'N/A' : user.HouseHoldIncome}</td>
												<td>{user.HouseHoldSize === '' ? 'N/A' : user.HouseHoldSize}</td>
												<td>{user.Phone}</td>
												<td>{user.Email}</td>
												<td>{user.Qualify === '' ? 'N/A' : user.Qualify}</td>

												<td>{user.Smoker === '' ? 'N/A' : user.Smoker}</td>
												<td>{user.HealthCondition === '' ? 'N/A' : user.HealthCondition}</td>
												<td>{user.MedicareStatus === '' ? 'N/A' : user.MedicareStatus}</td>
												<td>{user.MedicareProducts === '' ? 'N/A' : user.MedicareProducts}</td>
												<td>
													<i className="fas fa-trash" onClick={() => removePost(user.Type)}></i>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</Col>
					</Row>
				</Container>

				{/* Body End */}

				<footer className="footer">
					<div className="copyright">COPYRIGHT© 2020 LIBERTY MUTUAL INSURANCE ALL RIGHTS RESERVED</div>
				</footer>
			</div>
		</>
	);
}

export default Admin;
