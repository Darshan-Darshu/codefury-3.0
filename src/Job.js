import React, {useState} from "react";
import "./Job.css";
import ReactMarkDown from "react-markdown";
import {Button} from "@material-ui/core";

function Job({job}) {
	const [open, setOpen] = useState(false);
	return (
		<div className="job">
			<div className="job_section">
				<div className="job_info">
					<h2>
						{job.title} -{" "}
						<span className="job_titleCompany">{job.company}</span>
					</h2>
					<div className="job_date">
						{new Date(job.created_at).toLocaleDateString()}
					</div>
					<div className="job_bg">
						<h4 className="job_bgType">{job.type}</h4>
						<h4 className="job_bgLocation">{job.location}</h4>
					</div>
					<ReactMarkDown source={job.how_to_apply} />
				</div>
				<div className="job_image">
					<img
						src={job.company_logo}
						alt={job.company}
						className="job_logo"
						height="50"
					/>
				</div>
			</div>
			<Button
				variant="outlined"
				className="job_btn"
				onClick={() => setOpen((prevOpen) => !prevOpen)}
			>
				{open ? "Hide Details" : "View Details"}
			</Button>
			<div className="job_description">
				{open && <ReactMarkDown source={job.description} />}
			</div>
		</div>
	);
}

export default Job;
