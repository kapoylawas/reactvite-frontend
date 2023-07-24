//import react router dom
import { Routes, Route } from "react-router-dom";

//=======================================================================
//ADMIN
//=======================================================================

//import view Login
import Login from '../pages/admin/Login.jsx';

function RoutesIndex() {
    return (
        <Routes>

            {/* route "/admin/login" */}
            <Route path="/" element={<Login />} />

        </Routes>
    )
}

export default RoutesIndex