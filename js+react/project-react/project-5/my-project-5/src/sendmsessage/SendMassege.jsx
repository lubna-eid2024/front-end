import React from "react";
import { useLocation } from "react-router-dom";
import "./SendMassege.css";
export default function SendMassege() {
  const location = useLocation();

  const formData = location.state || {};

  return (
    <>
      <div className="w-100 vh-100 container-fluid">
        <h1>Submitted Form Data</h1>
        <p>Your input was received as:</p>

        <div className="d-flex flex-row align-items-center border-1 p-3 gap-4 ">
          <div>
            <span className="">{formData.name || "No name provided"}</span>
          </div>
          <div>
            <span className="">{formData.people || "No number provided"}</span>
          </div>
          <div>
            <span className="">{formData.datetime || "No date provided"}</span>
          </div>
          <div>
            <span className="">
              {formData.message || "No message provided"}
            </span>
          </div>
        </div>
        <p>The server has processed your input and returned this answer.</p>
        <div className="schools">
          <p>
            <b> Note:</b> This tutorial will not teach you how servers are
            processing input. Processing input is explained in our{" "}
            <a
              href="https://www.w3schools.com/php/default.asp"
              className="text-dark"
            >
              PHP tutorial
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
