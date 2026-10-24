import { Navigate } from "react-router-dom";
import { getToken, getUser } from "./Auth";

// Put this file at src/auth/ProtectedRoute.jsx
// Wrap a page with it:  <ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>
function ProtectedRoute({ role, children }) {
    const token = getToken();
    const user = getUser();

    // not logged in: go to the login page
    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    // logged in, but this page is for the other role: send them to their own dashboard
    if (role && user.role !== role) {
        return <Navigate to={user.role === "admin" ? "/admin" : "/dashboard"} replace />;
    }

    return children;
}

export default ProtectedRoute;
