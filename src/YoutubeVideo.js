import React from "react";
import YouTube from "react-youtube";

function YoutubeVideo() {
	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
	return (
		<div className="youtube">
			<YouTube videoId="m2N3tmJ_A0Q" opts={opts} />
		</div>
	);
}

export default YoutubeVideo;
