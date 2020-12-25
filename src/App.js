
import LandingPage from './Home'
import LearnMore from './LearnMore';
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
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/Home" component={LandingPage} />
				<Route path="/LearnMore" component={LearnMore} />
				<Route path="/Home/HealthQuotes" component={Health} />
				<Route path="/Home/LifeQuotes" component={Life} />
				<Route path="/Home/MedicareQuotes" component={Medicare} />
				<Route path="/Home/DentalQuotes" component={Dental} />
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
