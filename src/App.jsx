import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import Certificates from "./pages/Certificates";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      
      <Navbar />
      <div className="pt-16 min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </Router>
  );
}

export default App;
