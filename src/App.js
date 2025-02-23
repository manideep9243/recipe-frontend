import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import VegRecipes from "./pages/VegRecipes";
import NonVegRecipes from "./pages/NonVegRecipes";
import VegStarter from "./pages/VegStarter";
import NonVegStarter from "./pages/NonVegStarter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protected Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg-recipes" element={<VegRecipes />} />
        <Route path="/non-veg-recipes" element={<NonVegRecipes />} />
        <Route path="/veg-starter" element={<VegStarter />} />
        <Route path="/non-veg-starter" element={<NonVegStarter />} />
      </Routes>
    </Router>
  );
}

export default App;
