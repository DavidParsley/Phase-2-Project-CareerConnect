import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";


export default function AddStudent() {
  const [title, setTitle] = useState();
  const [company, setCompany] = useState();
  const [location, setLocation] = useState([]);
  const [description, setDescription] = useState();
  const [requirements, setRequirements] = useState([]);
  const [image, setImage] = useState();
  const [available, setAvailable] = useState(false);

  const nav = useNavigate()

  console.log(title)
  console.log(company);
  console.log(location);
  console.log(description);
  console.log(requirements);
  console.log(image);
  console.log(available)

  function handleSubmit(e) {
    e.preventDefault();

  const requirementsList= requirements.split (",")
 

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
        requirements: requirementsList,
        image: image,
        available: available
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success");
  
        
        nav("/");
        toast.success("Job added successfully!");
      });
  
    setTitle("");
    setCompany("");
    setLocation("");
    setDescription("");
    setRequirements("");
    setImage("");
    setAvailable("");

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
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          placeholder="Enter Job Title"
          required
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
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Location" className="form-label">
          Location
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control"
          placeholder="Enter Location"
          required
        />
         </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
         Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="Enter Job Description"
          required
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
          required
        />
      </div>

      <div className="mb-3">
  <label htmlFor="Available" className="form-label">
    Available
  </label>
  <input
    type="checkbox"
    checked={available}  // Boolean value (true/false)
    onChange={(e) => setAvailable(e.target.checked)} // Update based on whether checked or not
    className="form-check-input"
    id="Available"
    />
</div>

 

      <div className="mb-3">
        <label htmlFor="Image" className="form-label">
          Image
        </label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="form-control"
          placeholder="Enter Image"
          required
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