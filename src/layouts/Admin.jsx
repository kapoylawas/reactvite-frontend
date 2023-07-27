//import React
import React, { useState, useEffect } from "react";

//import component bootstrap
import { NavDropdown } from "react-bootstrap";

//import Sidebar
import Sidebar from "../components/admin/Sidebar";

//import BASE URL API
import Api from "../api";

//import js cookie
import Cookies from "js-cookie";

//hook link
import { useNavigate, Link } from "react-router-dom";

//import toats
import toast from "react-hot-toast";

import jwt_decode from "jwt-decode";

const LayoutAdmin = ({ children }) => {
  //state user
  const [user, setUser] = useState({});

  //state toggle
  const [sidebarToggle, setSidebarToggle] = useState(false);

  //token
  const token = Cookies.get("token");

  //navigate
  const navigate = useNavigate();

  const data = jwt_decode(token);

  console.log(data.user.email);

  //function toggle hanlder
  const sidebarToggleHandler = (e) => {
    e.preventDefault();

    if (!sidebarToggle) {
      //add class on body
      document.body.classList.add("sb-sidenav-toggled");

      //set state "sidebarToggle" to true
      setSidebarToggle(true);
    } else {
      //remove class on body
      document.body.classList.remove("sb-sidenav-toggled");

      //set state "sidebarToggle" to false
      setSidebarToggle(false);
    }
  };

  const logoutHandler = async (e) => {
    //remove token and localstorage
    Cookies.remove("token");
    localStorage.clear();

    //show toast
    toast.success("Logout Successfully.", {
      duration: 4000,
      position: "top-right",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    //redirect login page
    navigate("/");
  };

  const fetchData = async () => {
    //fetch on Rest API
    await Api.get("api/v1/user/1", {
      headers: {
        //header Bearer + Token
        token: `${token}`,
      },
    }).then((response) => {
      //set state "user"
      console.log(response);
      setUser(response.data);
    });
  };

  //hook useEffect
  useEffect(() => {
    //call function "fetchData"
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="d-flex sb-sidenav-toggled" id="wrapper">
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading bg-light text-center">
            <i className="fa fa-map-marked-alt"></i> <strong></strong>{" "}
            <small>ADMIN</small>
          </div>
          <Sidebar />
        </div>
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="btn btn-success-dark"
                onClick={sidebarToggleHandler}
              >
                <i className="fa fa-list-ul"></i>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <NavDropdown
                    title={data.user.email}
                    className="fw-bold"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to="/" target="_blank">
                      <i className="fa fa-external-link-alt me-2"></i> Visit Web
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/admin/users">
                      <i className="fa fa-users me-2"></i> Users
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logoutHandler}>
                      <i className="fa fa-sign-out-alt me-2"></i> Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LayoutAdmin;
