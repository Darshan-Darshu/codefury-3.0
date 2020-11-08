import React from "react";
import "./MainRow.css";

function MainRow({views, subs, description, timestamp, channel, title, image}) {
	return (
		<div className="mainRow">
			<img src={image} alt="" />
			<div className="mainRow_text">
				<h3>{title}</h3>
				<p className="mainRow_headline">
					{channel} ⚬{" "}
					<span className="mainRow_subs">
						<span className="mainRow_subsNumber">{subs}</span>
					</span>{" "}
					{views} ⚬ {timestamp}
				</p>
				<p className="mainRow_description">{description}</p>
			</div>
		</div>
	);
}

export default MainRow;
