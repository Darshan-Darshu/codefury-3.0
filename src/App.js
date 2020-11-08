import {useEffect} from "react";
import "./App.css";
import {auth} from "./firebase";
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {login, logout, selectUser} from "./features/userSlice";
import {useDispatch, useSelector} from "react-redux";
import Login from "./Login";
import Signin from "./Signin";
import Home from "./Home";
import Footer from "./Footer";
import SearchJob from "./SearchJob";
import Freelance from "./Freelance";
import DepartmentRow from "./DepartmentRow";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// the user is logged in
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					}),
				);
			} else {
				// the user is logged out
				dispatch(logout());
			}
		});
	}, [dispatch]);
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/signin">
						<Signin />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/search/:searchTerm">
						<Header />
						<SearchJob />
					</Route>

					<Route path="/freelance">
						<Header />
						<Freelance />
					</Route>

					<Route path="/">
						<>
							<Header />
							<Home />
							<DepartmentRow />
							<Footer />
						</>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
export default App;
