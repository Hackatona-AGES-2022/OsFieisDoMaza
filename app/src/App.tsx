import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Doctor from "./Doctor";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProfessionalHome from "./pages/ProfessionalHome/ProfessionalHome";
import ConfirmProfessional from "./pages/RegisterProfessional/ConfirmProfessional";
import RegisterProfessional from "./pages/RegisterProfessional/RegisterProfessional";
import ConfirmStudent from "./pages/RegisterStudent/ConfirmStudent";
import RegisterStudent from "./pages/RegisterStudent/RegisterStudent";
import StudentHome from "./pages/StudentHome/StudentHome";
import User from "./User";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/register/student" element={<RegisterStudent />} />

                <Route
                    path="/register/professional"
                    element={<RegisterProfessional />}
                />

                <Route
                    path="/register/student/confirm"
                    element={<ConfirmStudent />}
                />

                <Route
                    path="/register/professional/confirm"
                    element={<ConfirmProfessional />}
                />

                <Route path="/login" element={<Login />} />

                <Route path="/home/student" element={<User />} />

                <Route path="/home/professional" element={<Doctor />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
