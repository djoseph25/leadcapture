import React, { useState } from 'react';
import data from './Data'
import SingleQuestion from './Question';
import { Card, Container } from 'reactstrap';

const Learn = () => {
	const [Question] = useState(data);
	return (
		<Container style={{ marginTop: 54 }}>
			<h3 style={{ textAlign: 'center' }}>Frequently Ask Question And Answer</h3>
			<Card>
				<div>
					<section className="info">
						{Question.map((question) => {
							return <SingleQuestion key={question.id} {...question} />;
						})}
					</section>
				</div>
			</Card>
		</Container>
	);
};

export default Learn;
