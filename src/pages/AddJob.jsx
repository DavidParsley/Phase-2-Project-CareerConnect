import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";


export default function AddStudent() {
  const [title, setTitle] = useState();
  const [company, setCompany] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [requirements, setRequirements] = useState([]);
  const [image, setImage] = useState([]);

  const nav = useNavigate()

  console.log(title)
  console.log(company);
  console.log(location);
  console.log(description);
  console.log(requirements);
  console.log(image);

  function handleSubmit(e) {
    e.preventDefault();

  
    fetch(`http://localhost:3000/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        company: company,
        location: location,
        description: description,
        requirements: requirements,
        image: image
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success");
  
        
        nav("/");
        toast.success("Jobs added successfully!");
      });
  
    setTitle("");
    setCompany("");
    setLocation("");
    setDescription("");
    setRequirements("");
    setImage("");

  }
  

  return (
    <form
      className="container mt-4"
      action="/action_page.php"
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Title
        </label>
        <input
          type="email"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          placeholder="Enter Job Title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Company" className="form-label">
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
        <label htmlFor="Location" className="form-label">
          Location
        </label>
        <input
          type="number"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control"
          placeholder="Enter Location"
        />
         </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
         Description
        </label>
        <input
          type="url"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="Enter Job Description"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Requirements" className="form-label">
          Requirements
        </label>
        <input
          type="text"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          className="form-control"
          placeholder="Enter Job Requirements"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Image" className="form-label">
          Image
        </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="form-control"
          placeholder="Enter Image"
        />
      </div>

      <div className="text-center">
        <button type="submit" className="btn " style={{color:'#2557a7' }}>
          Submit
        </button>
      </div>
    </form>
  );
}