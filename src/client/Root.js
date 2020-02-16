import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/App";

const Root = () => (
    <BrowserRouter forceRefresh={true}>
        <App />
    </BrowserRouter>
);

export default Root;
