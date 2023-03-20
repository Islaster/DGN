import "./App.css";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
//PAGES
import Landing from "./Pages/Landing/Landing";
import DGN from "./Pages/DGN/DGN";
function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/play" element={<DGN />} />
      </Routes>
    </div>
  );
}

export default App;
