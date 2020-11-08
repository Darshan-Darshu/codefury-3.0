import React, {useState} from "react";
import "./JobInfo.css";
import AlarmIcon from "@material-ui/icons/Alarm";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import BusinessIcon from "@material-ui/icons/Business";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import YoutubeVideo from "./YoutubeVideo";

function JobInfo() {
	const [open, setOpen] = useState(false);
	return (
		<div className="jobInfo">
			<div className="jobInfo_info">
				<h1>
					The <span className="jobInfo_color">#1 Hackthon</span> to participate,
					from home and I have flexible job opportunities{" "}
					<span className="jobInfo_color">since 2020</span>
				</h1>
			</div>

			<div className="jobInfo_icons">
				<div className="jobInfo_option">
					<Link to="/search/:full-part-time-jobs">
						<AlarmIcon className="jobInfo_icon" />
						<p>Full & Part-Time Jobs</p>
					</Link>
				</div>
				<div className="jobInfo_option">
					<Link to="/freelance">
						<EmojiPeopleIcon className="jobInfo_icon" />
						<p>Employee & Freelance</p>
					</Link>
				</div>
				<div className="jobInfo_option">
					<Link>
						<BusinessIcon className="jobInfo_icon" />
						<p>Flexible On-Site</p>
					</Link>
				</div>
			</div>

			<div className="jobInfo_buttons">
				<Button variant="outlined" className="jobInfo_btnOrange">
					Take a Tour
				</Button>
				<p>or</p>
				<Button
					variant="outlined"
					className="jobInfo_btn"
					onClick={() => setOpen((Open) => !Open)}
				>
					{open ? "Hide Video" : "Show Video"}
				</Button>
			</div>

			<div className="jobInfo_youtube">{open && <YoutubeVideo />}</div>
		</div>
	);
}

export default JobInfo;
