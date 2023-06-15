import React, { useState } from 'react';
import '../styles/SignIn.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const HandlerSubmit = (e) => {
		e.preventDefault();
		console.log(userName, password);
		axios
			.post('http://localhost:4000/signup', { userName, password })
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					navigate('/newticket');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="wrapper">
			<div className="bg-signIn">
				<div className="signIn-content">
					<div className="signIn-header">
						<h1>Helpdesk System</h1>
					</div>

					<form
						className="signIn-body"
						onSubmit={(e) => HandlerSubmit(e)}
					>
						<input
							type="text"
							placeholder="UserName"
							onChange={(e) => setUserName(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							type="submit"
							className="signIn-btn"
						>
							Sign In
						</button>
					</form>
					<div className="signIn-footer">
						<p className="red">Forget password</p>
						<p>Sign Up</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
