//import hook react
import React, { useState } from "react";

//import BASE URL API
import Api from "../../api";

//import toats
import toast from "react-hot-toast";

//import js cookie
import Cookies from "js-cookie";

//import react router dom
import { Link, useNavigate } from "react-router-dom";

function Register() {
  //title page
  document.title = "Register - Administrator";

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-79">
            <div className="text-center mb-4">
              <h4>
                <i className="fab fa-usps" style={{ color: "#0d61f2" }}></i>{" "}
                <strong>Register</strong>
              </h4>
            </div>
            <div className="card border-0 rounded shadow-sm">
              <div className="card-body">
                <div className="text-center">
                  <h6 className="fw-bold">REGISTER</h6>
                  <hr />
                </div>

                <form>
                  <label className="mb-1">Name</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <label className="mb-1">Username</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <label className="mb-1">Email</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <label className="mb-1">PASSWORD</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <label className="mb-1">CONFIRM PASSWORD</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <label className="mb-1">PHOTO</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handlePhotoChange}
                    />
                  </div>
                  <div className="mt-2">
                    {previewUrl && (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        style={{ maxWidth: "100px" }}
                      />
                    )}
                  </div>
                  <button
                    className="btn btn-success shadow-sm rounded-sm px-4 w-100 mt-2"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
