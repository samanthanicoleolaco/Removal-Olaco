import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./products";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;

if (document.getElementById("samantha")) {
    ReactDOM.render(<AppRouter />, document.getElementById("samantha"));
}
