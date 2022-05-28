import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import User from "./User";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="user" element={<User />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,

    document.getElementById("root")
);
