import React from 'react';
import { Col, Row, Container, Card } from 'reactstrap';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import Submenu from '../Submenu';
import Data from './ArticleData';
const Article = () => {
	return (
		<>
		<Navbar/>
		<SideBar/>
		<Submenu/>
			<Container style={{ textAlign: 'center' }}>
			<header style={{fontSize:40, padding:30}}>Article</header>	
				{Data.map((test) => {
					return (
						<div style={{ float: 'left' }}>
							<h3 style={{paddingBottom:12, paddingTop:6}}>{test.Question}</h3>
							<h4 style={{lineHeight:2}}>
								{test.Answer}{' '}
								<a rel="new page" href={test.url} target="_blank">
									Learn More
								</a>
							</h4>
						</div>
					);
				})}
			</Container>
		</>
	);
};
export default Article;
