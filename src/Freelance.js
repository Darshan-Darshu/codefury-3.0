import React from "react";
import "./Freelance.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import MainRow from "./MainRow";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

function Freelance() {
	const user = useSelector(selectUser);
	return (
		<div className="freelance">
			<div className="freelance_filter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />
			<ChannelRow
				image={user ? user.photo : ""}
				channel={user ? user.displayName : "Guest"}
				verified
				subs="660k"
				noOfVideos={123}
				description="Born: Saturday, November 1, 1986, Mumbai, Maharashtra, India
                Awards: Filmfare Award South, Santosham Film Award, South Scope Style Award,
                Profession: Actress - Model Knows Language: Telugu, Hindi and Tamil Nationality: Indian"
			/>
			<hr />
			<MainRow
				subs="Web Development"
				description="Saturday, November 1, 1986, Mumbai, Maharashtra, India
                    Awards: Filmfare Award South, Santosham Film Award, South Scope Style Award,
                    Profession: Actress - Model Knows Language: Telugu, Hindi and Tamil Nationality: Indian"
				image="https://hackernoon.com/images/z2xg2bpo.jpg"
				title="React Js"
				timestamp="2:30 pm"
				channel="93 Skills"
			/>
			<MainRow
				subs="MockUp Language"
				description=" Saturday, November 1, 1986, Mumbai, Maharashtra, India
                    Awards: Filmfare Award South, Santosham Film Award, South Scope Style Award,
                    Profession: Actress - Model Knows Language: Telugu, Hindi and Tamil Nationality: Indian"
				image="https://blog.hyperiondev.com/wp-content/uploads/2018/05/HTML-CSS-Blog-1.jpg"
				title="HTML && CSS"
				timestamp="8:30 pm"
				channel="493 skills"
			/>
		</div>
	);
}

export default Freelance;
