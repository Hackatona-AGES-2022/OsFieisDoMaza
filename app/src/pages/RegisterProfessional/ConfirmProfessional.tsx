import { Button, TextField } from "@mui/material";
import { Amplify, Auth } from "aws-amplify";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function ConfirmProfessional() {
    Amplify.configure({
        aws_cognito_region: "us-west-2",

        aws_user_pools_id: "us-west-2_IZxTgoLSF",

        aws_user_pools_web_client_id: "hurld44tjiqe3h3876a4vk3t8",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent<Element, Event>) => {
        e.preventDefault();

        const email = (document.getElementById("email") as HTMLInputElement)
            .value;
        const code = (document.getElementById("code") as HTMLInputElement)
            .value;

        try {
            await Auth.confirmSignUp(email, code);
            navigate("/login");
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const valor: any = error;
            const errorMessage: string = valor.message;
            console.log(errorMessage);
        }
    };

    return (
        <div className="external-div">
            <form className="form">
                <p
                    style={{
                        fontSize: "22px",

                        fontWeight: 800,

                        marginBottom: "25px",
                    }}
                >
                    Confirmar sua conta
                </p>

                <TextField id="email" label="Email" variant="filled" />

                <TextField
                    id="code"
                    label="Código de verificação"
                    variant="filled"
                />

                <Button onClick={handleSubmit} variant="contained">
                    Cadastrar
                </Button>
            </form>
        </div>
    );
}

export default ConfirmProfessional;
