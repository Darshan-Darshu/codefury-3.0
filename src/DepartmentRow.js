import React from "react";
import Row from "./Row";
import "./DepartmentRow.css";

function DepartmentRow() {
	return (
		<div className="departmentRow">
			<h2>Department</h2>
			<div className="departmentRow_posters">
				<Row
					image="https://www.princetonreview.com/cms-content/medical-school-applications-FB.jpg"
					title="Medical"
					jobs="433"
				/>
				<Row
					image="https://engineersnetwork.org/wp-content/uploads/2019/02/Work-for-graduates-in-mechanical-engineering.jpg"
					title="Engineering"
					jobs="1020"
				/>
				<Row
					image="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/04/02/Pictures/making-agriculture-sustainable-agenda-profitable-should-top_44389510-5548-11e9-8bc0-bee180be535f.jpg"
					title="Agriculture"
					jobs={520}
				/>
				<Row
					image="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/08/02171142/POPr1-768x485.png"
					title="Under Passed"
					jobs={2310}
				/>
			</div>
			{/* container -> posters(image) */}
			{/* <h2>{movies}</h2> */}
		</div>
	);
}

export default DepartmentRow;
