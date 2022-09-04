import "./App.css";
import DGN from "./Pages/DGN/DGN";
import { history } from "./helpers/history";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/play" element={<DGN />} />
      </Routes>
      <h3>Welcome To The Duegeon</h3>
    </div>
  );
}

export default App;
