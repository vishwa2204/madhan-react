import './App.css';

//Default Components 
import { Route, Routes } from "react-router-dom";


import Navbar from './main-components/Navbar/Navbar';
import Footer from './main-components/Footer/Footer';

// Pages

import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
