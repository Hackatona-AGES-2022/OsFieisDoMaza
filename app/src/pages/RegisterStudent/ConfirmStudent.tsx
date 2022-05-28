import { Button, TextField } from "@mui/material";
import { Amplify, Auth } from "aws-amplify";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function ConfirmStudent() {
    Amplify.configure({
        aws_cognito_region: "us-west-2",

        aws_user_pools_id: "us-west-2_9NVDM08CD",

        aws_user_pools_web_client_id: "6447gbdi0emub6faek29j50oal",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent<Element, Event>) => {
        e.preventDefault();

        const cpfcpf = (document.getElementById("cpfcpf") as HTMLInputElement)
            .value;

        const code = (document.getElementById("code") as HTMLInputElement)
            .value;

        try {
            await Auth.confirmSignUp(cpfcpf, code);
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

                <TextField id="cpfcpf" label="CPF" variant="filled" />

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

export default ConfirmStudent;
