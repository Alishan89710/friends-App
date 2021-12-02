import { Routes as AppRoutes, Route, Link } from "react-router-dom";

import Login from "../components/Login";
import Signup from "../components/signup";
// import Invoice from "../components/Invoice";

const Routes = () => {
    return (
        <AppRoutes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
           
            {/* <Route path="invoices/:invoiceId" element={<Invoice />} /> */}
        </AppRoutes>
    );
};

export default Routes;