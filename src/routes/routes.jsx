//import react router dom
import { Routes, Route } from "react-router-dom";

//=======================================================================
//ADMIN
//=======================================================================

//import view Login
import Login from '../pages/admin/Login.jsx';

//import component private routes
import PrivateRoute from "./PrivateRoutes";

//import view admin Dashboard
import Dashboard from '../pages/admin/dashboard/Index.jsx';
import Register from "../pages/admin/Register.jsx";
import UsersIndex from "../pages/admin/users/Index.jsx";
import PasswordIndex from "../pages/admin/password/Index.jsx";
import PostIndex from "../pages/admin/post/Index.jsx";


// register

function RoutesIndex() {
    return (
        <Routes>

            {/* route "/admin/login" */}
            <Route path="/" element={<Login />} />

            <Route path="/register" element={<Register />} />

            {/* private route "/admin/dashboard" */}
            <Route
                path="/admin/dashboard"
                element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                }
            />
            {/* private route user */}
            <Route
                path="/admin/users"
                element={
                        <PrivateRoute>
                            <UsersIndex />
                        </PrivateRoute>
                }
            />
            {/* private route password */}
            <Route
                path="/admin/password"
                element={
                        <PrivateRoute>
                            <PasswordIndex />
                        </PrivateRoute>
                }
            />
            {/* private route POST */}
            <Route
                path="/admin/post"
                element={
                        <PrivateRoute>
                            <PostIndex />
                        </PrivateRoute>
                }
            />
            

        </Routes>
    )
}

export default RoutesIndex