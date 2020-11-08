import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectUser} from "./features/userSlice";
import {auth} from "./firebase";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import {useState} from "react";
import addNotification from "react-push-notification";

function Header() {
	const user = useSelector(selectUser);
	const [inputSearch, setInputSearch] = useState("");

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	const buttonClick = () => {
		addNotification({
			title: "Hacking",
			subtitle: "Hello Buddies",
			message: "Hi i am Darshan",
			theme: "darkblue",
			native: true, // when using native, your OS will handle theming.
			position: "top-right",
		});
	};

	// console.log(user);

	return (
		<div className="header">
			<div className="header_logo">
				<img
					src="https://png2.cleanpng.com/sh/d94d0c21940d6822babec0e833d25a7f/L0KzQYm3VMAyN5ltj5H0aYP2gLBuTfxwb5Cye9H2cHHxiX7plgNqdpZ4i59wcnHzeLrqTfRme5pshtd7LXzyd7E0hPV0cZhzRadqY0DlSIPqUfRjamM3Rqk5NkO5Q4m5UcUzOmY8Uac5MEG1QYm1kP5o/kisspng-logo-company-business-graphic-designer-logo-design-5ac0b82c1dbb22.7063638215225795001218.png"
					alt=""
				/>
				<h1>CodeFury 3.0</h1>
			</div>
			<div className="header_search">
				<input
					type="text"
					value={inputSearch}
					onChange={(e) => {
						setInputSearch(e.target.value);
					}}
					placeholder="Search Jobs"
					className="header_searchInput"
				/>
				<Link to={`/search/${inputSearch}`}>
					<button
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							setInputSearch("");
						}}
						className="header_submit"
					>
						Submit
					</button>
				</Link>
				<Link
					to={`/search/${inputSearch}`}
					onClick={(e) => {
						setInputSearch("");
					}}
					className="header_inputButton"
				>
					<SearchIcon />
				</Link>
			</div>
			<div className="header_right">
				<Link to={!user && "/login"} className="header_optionLink">
					<div className="header_option">
						<span className="header_optionLineOne">
							Hello {user ? user?.displayName : "Guest"}
						</span>
						<span
							className="header_optionLineTwo"
							onClick={handleAuthentication}
						>
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

				<div className="header_option">
					<span className="header_optionLineOne">Orders</span>
					<span className="header_optionLineTwo">& Training</span>
				</div>

				<div className="header_option header_optionTwo">
					<span className="header_optionLineOne">Your</span>
					<span className="header_optionLineTwo">Department</span>
				</div>

				<Link className="header_optionLink">
					<div className="header_optionAvatar">
						<Avatar
							onClick={buttonClick}
							className="button"
							src={user ? user.photo : ""}
							alt={user ? user.displayName : "None"}
						/>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
