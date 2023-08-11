import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./../Styles/Auth.css";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [user, setUser] = useState(false);
  const [error, setError] = useState("");
  const handleLogin = async () => {
    setError("");
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      setUser(true);
    } else {
      setError("Invalid email or username!");
    }
  };
  const handleSignup = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      setUser(true);
    } else {
      setError("Invalid email or username!");
    }
  };
  return (
    <div className="auth">
      {!user ? (
        <>
          <h3>{hasAccount ? "Login" : "Sign-up"}</h3>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          ></input>
          {hasAccount ? (
            <span>
              Doesn't have an account ?
              <div
                className="userOption"
                onClick={() => {
                  setHasAccount(false);
                }}
              >
                Login
              </div>
            </span>
          ) : (
            <span>
              Already have an Account?
              <div
                className="userOption"
                onClick={() => {
                  setHasAccount(true);
                }}
              >
                Login
              </div>
            </span>
          )}
          {hasAccount ? (
            <button
              className="more"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </button>
          ) : (
            <button
              className="more"
              onClick={() => {
                handleSignup();
              }}
            >
              Sign-up
            </button>
          )}
          {error ? <span style={{ color: "red" }}>{error}</span> : <></>}
        </>
      ) : (
        <span>أهلا وسهلا</span>
      )}
    </div>
  );
}

export default Auth;
