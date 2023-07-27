//import react
import React, { useEffect, useState } from "react";

//import layout admin
import LayoutAdmin from "../../../layouts/Admin";

//import js cookie
import Cookies from "js-cookie";

//import BASE URL API
import Api from "../../../api";

function PasswordIndex() {
  //title page
  document.title = "Change Password - Administrator";

  return (
    <React.Fragment>
      <LayoutAdmin>
        <div className="row mt-4 mb-4">
          <div className="col-12">
            <div className="card border-0 rounded shadow-sm border-top-success">
              <div className="card-header">
                <span className="font-weight-bold">
                  <i className="fa fa-folder"></i> Edit User
                </span>
              </div>
              <div className="card-body">
                <form>
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

                  <div className="mt-3">
                    <button type="submit" className="btn btn-md btn-success">
                      <i className="fa fa-save"></i> SAVE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default PasswordIndex;
