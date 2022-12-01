import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles/App.scss';
import { useState } from "react";
import Layout from "./layouts/Main";
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from "./pages/dashboard";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  }
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout toggleDarkmode={toggleDarkmode} darkmode={darkmode}/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout toggleDarkmode={toggleDarkmode} darkmode={darkmode}/>}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
