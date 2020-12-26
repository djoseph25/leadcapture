import React from 'react';
import Hero from './Hero';
import LearnMore from './LearnMore';
import Articles from './LearnComponent/Article'
import Health from './HealthQuotes';
import Life from './LifeQuotes';
import Medicare from './MedicareQuotes';
import Dental from './DentalQuotes';
import Submit from './Thankyou';
import Admin from './AdminUser/AdminUser';
import AuthorizedOnly from './AdminUser/AuthorizedUserOnly';
import ProtectedRoute from './AdminUser/protectedRoute';
import WrongRoute from './404';
import { Route, Switch } from 'react-router-dom';
import { useGlobalContext } from './context';

function App() {
	const { isAuthenticated, logout } = useGlobalContext();

	return (
		<>
			<Switch>
				<Route exact path="/" component={Hero} />
				<Route exact path="/Home" component={Hero} />
				<Route path="/LearnMore" component={LearnMore} />
				<Route path="/Article" component={Articles} />
				<Route path="/HealthQuotes" component={Health} />
				<Route path="/LifeQuotes" component={Life} />
				<Route path="/MedicareQuotes" component={Medicare} />
				<Route path="/DentalQuotes" component={Dental} />
				<Route path="/ThankYou" component={Submit} />
				<Route path="/AdminUser/AuthorizedUserOnly" component={AuthorizedOnly} />
				<ProtectedRoute
					isAuthenticated={isAuthenticated}
					path="/AdminUser/AdminUser"
					logout={logout}
					component={Admin}
				/>
				<Route path="*" component={WrongRoute} />
			</Switch>
		</>
	);
}

export default App;

