import {Button} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {auth, provider} from "./firebase";
import "./Signin.css";

function Signin() {
	const history = useHistory();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// user has logged in....
				console.log(authUser);
			} else {
				setUser(null);
				//   user has logged out
			}
		});

		return () => {
			// Preform some cleanup actions
			unsubscribe();
		};
	}, [user, username]);

	const signInGoogle = () => {
		auth
			.signInWithPopup(provider)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	const signUp = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				return authUser.user.updateProfile({
					displayName: username,
				});
			})
			.catch((error) => alert(error.message));
		if (auth) {
			history.push("/");
		}
	};
	return (
		<div className="signin">
			<div className="signin_info">
				<Link to="/">
					<img
						className="signin_logo"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqJ566KSMfDKaSZlrPdfmSXyrNQDKI4f1H_Q&usqp=CAU"
						alt=""
					/>
					<h1>CodeFury 3.0</h1>
				</Link>
			</div>

			<div className="signin_container">
				<h1>Sign Up</h1>
				<form className="signin_form">
					<h5>Username</h5>
					<input
						type="text"
						className="signin_input"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<h5>Email</h5>
					<input
						type="text"
						className="signin_input"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						className="signin_input"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</form>

				<button
					onClick={signUp}
					className="signin_registerButton"
					type="submit"
				>
					Sign Up
				</button>

				<p>
					I already have an account: <Link to="/login">Log In</Link>
				</p>

				<p>
					By signing- in you agree to CODEFURY 3.0 Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice
				</p>

				<Button
					className="signin_googleSignIn"
					variant="outlined"
					onClick={signInGoogle}
				>
					<div className="signin_buttonBg">
						<img
							className="signin_buttonImg"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
							alt=""
						/>
					</div>
					Sign In With Google
				</Button>
			</div>
		</div>
	);
}

export default Signin;
