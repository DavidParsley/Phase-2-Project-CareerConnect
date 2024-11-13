import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Job from "./pages/Job";
import AddJob from "./pages/AddJob";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [onlyAvailableJobs, setOnlyAvailableJobs] = useState(false); 

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const availableJobs = onlyAvailableJobs ? filteredJobs.filter((job) => job.available) : filteredJobs;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout search={search} setSearch={setSearch}   setOnlyAvailableJobs={setOnlyAvailableJobs} />}>
          <Route index element={<Home jobs={availableJobs} />}/>
          <Route path="/about" element={<About />} />
          <Route path="/job/:id" element={<Job />} />
          <Route path="addJob" element={<AddJob />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
