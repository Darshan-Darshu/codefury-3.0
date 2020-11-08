import React, {useState} from "react";
import useFetchJobs from "./useFetchjobs";
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";

function SearchJob() {
	const [params, setParams] = useState({});
	const [page, setPage] = useState(1);
	const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page);

	const handleParamChange = (e) => {
		const param = e.target.name;
		const value = e.target.value;
		setPage(1);
		setParams((prevParams) => {
			return {
				...prevParams,
				[param]: value,
			};
		});
	};
	return (
		<div className="searchJob">
			<div className="searchJob_container">
				<h1 style={{marginLeft: "20px", marginTop: "10px"}}>
					CodeFury 3.0 Jobs List
				</h1>
				<SearchForm params={params} onParamChange={handleParamChange} />
				<JobsPagination page={page} setPage={setPage} hasNextPage={true} />
				{loading && <h1>Loading....</h1>}
				{error && <h1>Error. try Refreshing.</h1>}
				{jobs.map((job) => {
					return <Job Key={job.id} job={job} />;
				})}
				<JobsPagination page={page} setPage={setPage} hasNextPage={true} />
			</div>
		</div>
	);
}

export default SearchJob;
