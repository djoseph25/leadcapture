import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

function ProtectedRoute({
	component: Component,
	isAuthenticated: isAuthenticated,
	logout: logout,
	...rest
}) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuthenticated) {
					return <Component logout={logout} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: '/AdminUser/AuthorizedUserOnly',
								state: { from: props.location },
							}}
						/>
					);
				}
			}}
		/>
	);
}

export default ProtectedRoute;
