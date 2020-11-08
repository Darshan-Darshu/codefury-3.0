import React from "react";
import {Pagination} from "react-bootstrap";
import "./JobsPagination.css";

function JobsPagination({page, setPage, hasNextPage}) {
	const adjustPage = (amount) => {
		setPage((prevPage) => prevPage + amount);
	};
	return (
		<div className="jobsPagination">
			<Pagination className="jobsPagination_container">
				{page !== 1 && (
					<Pagination.Prev
						className="jobsPagination_main"
						onClick={() => adjustPage(-1)}
					/>
				)}
				{page !== 1 && (
					<Pagination.Item
						onClick={() => setPage(1)}
						className="jobsPagination_main"
					>
						{1}
					</Pagination.Item>
				)}
				{page > 2 && <Pagination.Ellipsis className="jobsPagination_main" />}
				{page > 2 && (
					<Pagination.Item
						onClick={() => adjustPage(-1)}
						className="jobsPagination_main"
					>
						{page - 1}
					</Pagination.Item>
				)}
				<Pagination.Item className="jobsPagination_main" active>
					{page}
				</Pagination.Item>
				{hasNextPage && (
					<Pagination.Item
						onClick={() => adjustPage(1)}
						className="jobsPagination_main"
					>
						{page + 1}
					</Pagination.Item>
				)}
				{hasNextPage && (
					<Pagination.Next
						onClick={() => adjustPage(1)}
						className="jobsPagination_main"
					/>
				)}
			</Pagination>
		</div>
	);
}

export default JobsPagination;
