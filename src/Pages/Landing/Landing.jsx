import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <section>
      <h1>Would you like to Enter the Dungeon</h1>
      <h3>
        [
        <Link to="/play" className="Y">
          Y
        </Link>
        /
        <Link to="/" className="N" onClick={window.close}>
          N
        </Link>
        ]
      </h3>
    </section>
  );
}
