import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { searchContext } from "./contexts/searchContext";
import { useState } from "react";
import Search from "./pages/Search";
import Cuisine from "./pages/Cuisine";
import Recipe from "./pages/Recipe";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <searchContext.Provider value={{ value, setValue }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
        </Router>
      </searchContext.Provider>
    </div>
  );
}

export default App;
