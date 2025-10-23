import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [userInput, setUserInput] = useState({
    Email: "",
    Password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault(); 

    if (userInput.Email && userInput.Password) {
      const fakeToken =
        "eyJ1c2VySWQiOjEsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImV4cCI6MTc1OTk2MDc2MTc2MH0=";
      localStorage.setItem("authToken", fakeToken);
      localStorage.setItem("userEmail", userInput.Email);
      navigate("/Home");
    } else {
      alert("Please fill in all fields");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Login</h1>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    name="Email"
                    value={userInput.Email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    name="Password"
                    value={userInput.Password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>

              <div className="text-center mt-3">
                <Link to="/Registration" className="btn btn-link">
                  Don't have an account? Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
