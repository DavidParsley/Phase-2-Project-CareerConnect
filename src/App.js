import "./App.css";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Job from "./pages/Job";
import AddJob from "./pages/AddJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/job/:id" element={<Job />} />
          <Route path="/addJob" element={<AddJob />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
