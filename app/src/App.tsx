import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterProfessional from "./pages/RegisterProfessional/RegisterProfessional";
import RegisterStudent from "./pages/RegisterStudent/RegisterStudent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterStudent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
