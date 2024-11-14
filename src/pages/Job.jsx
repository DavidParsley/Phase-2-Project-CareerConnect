import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Job() {
  const nav = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [requirements, setRequirements] = useState("");
  const [available, setAvailable] = useState(false);

  
  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setJob(data);
        setTitle(data.title);
        setDescription(data.description);
        setCompany(data.company);
        setLocation(data.location);
        setImage(data.image);
        setRequirements(data.requirements);
        setAvailable(data.available);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);


  function handleDelete() {
    fetch(`http://localhost:3000/jobs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        nav("/");
        toast.success("Job deleted successfully!", {
            style:{
                color: "#2557a7",
            },
        })
      })
      .catch((error) => console.error("Error deleting job:", error));
  }


  function handleUpdate(e) {
    e.preventDefault();

    const requirementsList = !Array.isArray(requirements) ? requirements.split(",") : requirements


    fetch(`http://localhost:3000/jobs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        company,
        location,
        image,
        description,
        requirements: requirementsList,
        available,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        nav("/");
        toast.success("Job updated successfully!", {
            style:{
                color: "#2557a7"
            },
        })
      })
      .catch((error) => console.error("Error updating job:", error));
  }

  return (
    <div
  className="d-flex justify-content-center align-items-center min-vh-100"
  style={{ margin: "0 auto", padding: "20px" }}
>
  <div
    className="card mb-4 shadow-sm rounded"
    style={{ width: "100%", maxWidth: "700px" }}
  >
    <img src={job.image} className="card-img-top" alt={job.title} />
    <div className="card-body text-center">
      <h5 className="card-title"><strong>{job.title}</strong></h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Company: </strong>{job.company}</li>
        <li className="list-group-item"><strong>Location: </strong>{job.location}</li>
        <li className="list-group-item"><strong>Description: </strong>{job.description}</li>
        <li className="list-group-item"><strong>Available: </strong>{job.available ? "Yes" : "No"}</li>
        <li className="list-group-item"><strong> Requirements: </strong>
          <div className="requirements-list">
            {job.requirements &&
              job.requirements.map((requirement, index) => (
                <span className="requirement-item" key={index}>{requirement}</span>
              ))}
          </div>
        </li>
      </ul>
    </div>
    <button className="btn  mb-4" style={{backgroundColor:"red", color: 'black'}} onClick={handleDelete}>
      Delete job
    </button>
  </div>

  <form className="container mt-4" onSubmit={handleUpdate}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">
        Title
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
        placeholder="Enter Title"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="company" className="form-label">
        Company
      </label>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="form-control"
        placeholder="Enter Company Name"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="location" className="form-label">
        Location
      </label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="form-control"
        placeholder="Enter Location"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="image" className="form-label">
        Image URL
      </label>
      <input
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="form-control"
        placeholder="Enter Image URL"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="available" className="form-label">
        Available
      </label>
      <input
        type="checkbox"
        checked={available} 
        onChange={(e) => setAvailable(e.target.checked)} 
        className="form-check-input"
        id="available"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="requirements" className="form-label">
        Requirements
      </label>
      <input
        type="text"
        value={requirements}
        onChange={(e) => setRequirements(e.target.value)}
        className="form-control"
        placeholder="Enter Requirements (comma separated)"
      />
    </div>

    <div className="text-center">
      <button type="submit" className="btn"  style={{backgroundColor:"#2557a7", color: 'white'}}>
        Update
      </button>
    </div>
  </form>
</div>

  );
}