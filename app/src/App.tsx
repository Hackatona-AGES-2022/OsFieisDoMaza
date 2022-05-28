import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import ProfessionalHome from "./pages/ProfessionalHome/ProfessionalHome";
import ConfirmProfessional from "./pages/RegisterProfessional/ConfirmProfessional";
import RegisterProfessional from "./pages/RegisterProfessional/RegisterProfessional";
import ConfirmStudent from "./pages/RegisterStudent/ConfirmStudent";
import RegisterStudent from "./pages/RegisterStudent/RegisterStudent";
import StudentHome from "./pages/StudentHome/StudentHome";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterStudent />} />

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

                <Route path="/home/student" element={<StudentHome />} />

                <Route
                    path="/home/professional"
                    element={<ProfessionalHome />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
