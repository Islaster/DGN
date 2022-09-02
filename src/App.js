import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

function App() {
  const [change, setChange] = useState(true);
  return (
    <div className="App">
      <Routes></Routes>
      <h3>Welcome To The Duegeon</h3>
    </div>
  );
}

export default App;
