//import react  
import React from "react";

//import layout admin
import LayoutAdmin from "../../../layouts/Admin";

function Dashboard() {

	//title page
    document.title = "Dashboard - Administrator";

    return(
        <React.Fragment>
            <LayoutAdmin>
            <div className="row mt-4">
                    
                </div>
            </LayoutAdmin>
        </React.Fragment>
    )

}

export default Dashboard