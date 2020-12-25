import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ question, answer }) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<article className="question" style={{ color: 'black' }}>
			<header>
				<h4>{question}</h4>
				<button className="btn1" onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showInfo && <p>{answer}</p>}
		</article>
	);
};

export default Question;
