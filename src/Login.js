import React, {useState} from "react";
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signInGoogle = () => {
		auth
			.signInWithPopup(provider)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	const signIn = (e) => {
		e.preventDefault();

		// Firebase Auth stuff
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login_info">
				<Link to="/">
					<img
						className="login_logo"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqJ566KSMfDKaSZlrPdfmSXyrNQDKI4f1H_Q&usqp=CAU"
						alt=""
					/>
					<h1>CodeFury 3.0</h1>
				</Link>
			</div>
			<div className="login_container">
				<h1>Sign In</h1>

				<form>
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>

					<div className="login_buttons">
						<button
							className="login_signInButton"
							type="submit"
							onClick={signIn}
						>
							Log In
						</button>

						<Link to="/signin" className="login_registerButton">
							<button>Sign Up</button>
						</Link>
					</div>
				</form>

				<p>
					By signing- in you agree to CODEFURY 3.0 Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice
				</p>

				<Button
					className="login_googleSignIn"
					variant="outlined"
					onClick={signInGoogle}
				>
					<div className="login_buttonBg">
						<img
							className="login_buttonImg"
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

export default Login;
