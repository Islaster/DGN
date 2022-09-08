import { useState } from "react";
import LoginForm from "../../utilities/LoginForm";
import SignUpForm from "../../utilities/SignUpForm";

export default function Auth({ user, setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <div className="switch">
        <input
          className="switch-input"
          id="mySwitch"
          type="checkbox"
          onClick={() => setShowSignUp(!showSignUp)}
        />

        <label className="switch-paddle" htmlFor="mySwitch">
          <span className="show-for-sr">{showSignUp ? "Login" : "SignUp"}</span>
        </label>
      </div>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </>
  );
}
