import React from "react";

//import Link
import {Link, useLocation} from 'react-router-dom';

function Sidebar() {

    //assigning location variable
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    
    return(
        <React.Fragment>
            <div className="list-group list-group-flush">
                <Link className={splitLocation[2] === "dashboard" ? "list-group-item list-group-item-action list-group-item-light p-3 text-uppercase active" : "list-group-item list-group-item-action list-group-item-light p-3 text-uppercase"} to="/admin/dashboard"><i className="fa fa-tachometer-alt me-2"></i> Dashboard</Link>
                <Link className={splitLocation[2] === "users" ? "list-group-item list-group-item-action list-group-item-light p-3 text-uppercase active" : "list-group-item list-group-item-action list-group-item-light p-3 text-uppercase"} to="/admin/users"><i className="fa fa-users me-2"></i> Users</Link>
            </div>
        </React.Fragment>
    )
}

export default Sidebar