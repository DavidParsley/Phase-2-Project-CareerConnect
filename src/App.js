import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Job from "./pages/Job";
import AddJob from "./pages/AddJob";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const [search, setSearch] = useState("");
  const filter = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout search={search} setSearch={setSearch} />}>
          <Route index element={<Home jobs={filter} />} />
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
