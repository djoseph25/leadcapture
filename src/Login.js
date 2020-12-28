import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';

import { Button, Modal, ModalBody, FormGroup, Form, Input, Label } from 'reactstrap';
import { useGlobalContext } from './context';

const Login = () => {
	const { login, toggle, loginModal, Login, handleLogin } = useGlobalContext();

	return (
		<>
			<Button color="danger" onClick={toggle} className="btn signin-btn">
				sign up
			</Button>
			<Modal isOpen={loginModal} toggle={toggle}>
				<ModalBody className="sign-in">
					<Form className="login-form">
						<h3>Sign In</h3>
						
						<FormGroup>
							<Label className="login-label">Email</Label>
							<Input type="email" placeholder="Email"  required="required"/>
						</FormGroup>
						<FormGroup>
							<Label className="login-label">Password</Label>
							<Input type="password" placeholder="Password"  required="required"/>
						</FormGroup>
						<Button className="btn-lg btn-dark btn-block" onClick={login}>
							Log In
						</Button>
						<div className="google">Or continue with your Google Account.</div>
						<GoogleLoginButton />
					</Form>
				</ModalBody>
			</Modal>
		</>
	);
};

export default Login;
