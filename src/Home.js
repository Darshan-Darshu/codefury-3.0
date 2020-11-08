import React from "react";
import "./Home.css";
import JobInfo from "./JobInfo";
import ChatIcon from "@material-ui/icons/Chat";

function Home() {
	return (
		<div className="home">
			<JobInfo />
			<div className="home_message">
				<a href="https://i-message-clone-f0f23.web.app/">
					<ChatIcon className="home_messageIcon" />
					<span className="home_messageCount">2</span>
				</a>
			</div>
		</div>
	);
}

export default Home;
