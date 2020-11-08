import React from "react";
import "./SearchForm.css";

function SearchForm({params, onParamChange}) {
	return (
		<div className="searchForm">
			<form className="searchForm_control">
				<div className="searchForm_container">
					<h3>Description</h3>
					<input
						onChange={onParamChange}
						value={params.description}
						name="description"
						type="text"
					/>
				</div>
				<div className="searchForm_container">
					<h3>Location</h3>
					<input
						onChange={onParamChange}
						value={params.location}
						name="location"
						type="text"
					/>
				</div>
				<div className="searchForm_container searchForm_check">
					<input
						onChange={onParamChange}
						value={params.full_time}
						name="full_time"
						id="full_time"
						label="Only Full Time"
						type="checkbox"
						className="search_check"
					/>
					<h3>Full Time Job</h3>
				</div>
			</form>
		</div>
	);
}

export default SearchForm;
