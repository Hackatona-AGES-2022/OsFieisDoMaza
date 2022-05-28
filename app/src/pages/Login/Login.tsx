import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <p>LOGIN</p>

            <p>Que tipo de usuário você é?</p>

            <Button
                onClick={() => navigate("/home/doctor")}
                variant="contained"
            >
                Médico
            </Button>

            <Button
                onClick={() => navigate("/home/student")}
                variant="contained"
            >
                Aluno
            </Button>
        </div>
    );
}

export default Login;
