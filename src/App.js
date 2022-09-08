import "./App.css";
import DGN from "./Pages/DGN/DGN";
import { useState } from "react";
import { getUser } from "./utilities/user-service";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <Routes>
        <Route path="/play" element={<DGN />} />
      </Routes>
      <h3>Welcome To The Duegeon</h3>
      <Auth user={user} setUser={setUser} />
    </div>
  );
}

export default App;
