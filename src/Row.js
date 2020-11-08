import React from "react";
import "./Row.css";

function Row({image, title, jobs}) {
	return (
		<div className="row">
			<img src={image} alt="" className="row_poster" />
			<div className="row_info">
				<h2>{title}</h2>
				<h4>
					Jobs: <span>{jobs}</span>
				</h4>
			</div>
		</div>
	);
}

export default Row;
