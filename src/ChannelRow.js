import {Avatar} from "@material-ui/core";
import React from "react";
import "./ChannelRow.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutline";

function ChannelRow({image, channel, subs, noOfVideos, description, verified}) {
	return (
		<div className="channelRow">
			<Avatar className="channelRow_logo" alt={channel} src={image} />
			<div className="channelRow_text">
				<h4>
					{channel} {verified && <CheckCircleOutlinedIcon />}
				</h4>
				<p>
					{subs} Skills ⚬ {noOfVideos} Jobs
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ChannelRow;
