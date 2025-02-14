import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
	<BrowserRouter>
		<AppProvider>
			<App />
		</AppProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
