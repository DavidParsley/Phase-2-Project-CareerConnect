import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home({ jobs}) {
    const [sortOption, setSortOption] = useState("title");

    const sortedJobs = [...jobs].sort((a, b) =>
        sortOption === "title"
          ? a.title.localeCompare(b.title)
          : a.company.localeCompare(b.company)
      );


  return (
    <div className="container mt-5">
      <h2>Job Listings</h2>

      <div className="">
        <label htmlFor="sortOption" className="me-2">
          Sort by:
        </label>
        <select
          id="sortOption"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="form-select"
        >
          <option value="title">Title</option>
          <option value="company">Company</option>
        </select>
      </div>

      {jobs.length < 1 && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <div className="row">
        {sortedJobs.map((detail) => (
          <Link
            to={`/job/${detail.id}`}
            className="col-md-4 col-lg-3 mb-4 link-dark card-link"
            key={detail.id}
          >
            <div className="card h-100">
              <img src={detail.image} className="card-img-top" alt={detail.title} />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-center">{detail.title}</h4>
                <h6 className="card-title text-center">
                  <strong>Company:</strong> {detail.company}
                </h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Location:</strong> {detail.location}
                  </li>
                  <li className="list-group-item">
                    <strong>Description:</strong> {detail.description}
                  </li>
                  <li className="list-group-item">
                    <strong>Requirements:</strong>
                    {Array.isArray(detail.requirements) &&
                      detail.requirements.map((requirement, index) => (
                        <span key={index} className="requirement-item">
                          {requirement}
                        </span>
                      ))}
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}