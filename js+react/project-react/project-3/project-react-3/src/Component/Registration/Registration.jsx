import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [theme, setTheme] = useState(`bg-primary`);
  const [isDark, setDark] = useState(false);
  const [useInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    picture: null,
  });
  const navigate = useNavigate();
  const fakeToken =
    "eyJ1c2VySWQiOjEsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImV4cCI6MTc1OTk2MDc2MTc2MH0=";
  localStorage.setItem("authToken", fakeToken);
  localStorage.setItem("useEmail", useInput.Email);
  navigate("/");
  function handleChange(e) {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      setUserInput({ ...useInput, picture: file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setUserInput({ ...useInput, [e.target.name]: e.target.value });
    }
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }
  function handleSumbit(e) {
    e.preventDefault();

    if (useInput.password !== confirmPassword) {
      alert("error password");
      return;
    }

    setIsSubmitted(true); //
    console.log(useInput);
  }
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  function toggleConfirmPasswordVisibility() {
    setShowConfirmPassword(!showConfirmPassword);
  }
  function dark() {
    if (isDark) {
      setTheme(`bg-success`);
      setDark(false);
    } else {
      setTheme(`bg-danger`);
      setDark(true);
    }
  }
  return (
    <>
      <div className={`d-flex w-100 vh-100 container p-5 ${theme}`}>
        <div className="row col-md-6">
          <form className="" onSubmit={handleSumbit}>
            <div className="d-flex align-items-center mb-3">
              <label
                htmlFor="firstName"
                className="form-label me-3"
                style={{ minWidth: "100px" }}
              >
                First name
              </label>
              <input
                type="text"
                className="form-control w-50"
                id="firstName"
                name="fristname"
                value={useInput.fristname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex align-items-center mb-3">
              <label
                htmlFor="inputPassword6"
                className="form-label me-3"
                style={{ minWidth: "100px" }}
              >
                last name
              </label>
              <input
                type="text"
                className="form-control w-50"
                id="last name"
                name="lastname"
                required
                value={useInput.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex align-items-center mb-3">
              <label
                htmlFor="inputPassword6"
                className="form-label me-3"
                style={{ minWidth: "100px" }}
              >
                email
              </label>
              <input
                type="email"
                className="form-control w-50"
                id=" email"
                name="email"
                value={useInput.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex align-items-center mb-3">
              <label
                htmlFor="password"
                className="form-label me-3"
                style={{ minWidth: "100px" }}
              >
                Password
              </label>
              <div className="position-relative w-50">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control pe-5"
                  id="password"
                  name="password"
                  value={useInput.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y"
                  onClick={togglePasswordVisibility}
                  style={{ border: "none", background: "transparent" }}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <label
                htmlFor="confirmPassword"
                className="form-label me-3"
                style={{ minWidth: "100px" }}
              >
                Confirm password
              </label>
              <div className="position-relative w-50">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control pe-5"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y"
                  onClick={toggleConfirmPasswordVisibility}
                  style={{ border: "none", background: "transparent" }}
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div className=" d-flex align-items-center mb-3">
              <label
                htmlFor="formFile"
                className="form-label"
                style={{ minWidth: "100px" }}
              >
                picture
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                name="picture"
                onChange={handleChange}
                accept="image/*"
              />

              {isSubmitted && imagePreview && (
                <img
                  src={imagePreview}
                  alt=""
                  id="image-preview"
                  className="w-25 h-1 ms-5"
                />
              )}
            </div>
            <div className=" d-flex align-items-center mb-3">
              <button
                className="w-25 btn btn-warning"
                type="submit"
                value=" Registor"
              >
                Registor
              </button>
            </div>
            <div className=" d-flex align-items-center mb-3">
              <button
                className="w-25 btn btn-warning"
                type="submit"
                value=""
                onClick={dark}
              >
                color
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
    </>
  );
}



