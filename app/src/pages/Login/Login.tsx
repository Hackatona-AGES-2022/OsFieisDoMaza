import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Amplify, Auth } from "aws-amplify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent<Element, Event>) => {
        e.preventDefault();
        const username = (
            document.getElementById("username") as HTMLInputElement
        ).value;
        const password = (
            document.getElementById("password") as HTMLInputElement
        ).value;

        if (username.length === 11) {
            try {
                Amplify.configure({
                    aws_cognito_region: "us-west-2",

                    aws_user_pools_id: "us-west-2_9NVDM08CD",

                    aws_user_pools_web_client_id: "6447gbdi0emub6faek29j50oal",
                });
                await Auth.signIn(username, password);
                navigate("/home/student");
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const valor: any = error;
                const errorMessage: string = valor.message;
                console.log(errorMessage);
            }
        } else {
            try {
                Amplify.configure({
                    aws_cognito_region: "us-west-2",
                    aws_user_pools_id: "us-west-2_IZxTgoLSF",
                    aws_user_pools_web_client_id: "hurld44tjiqe3h3876a4vk3t8",
                });
                await Auth.signIn(username, password);
                navigate("/home/professional");
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const valor: any = error;
                const errorMessage: string = valor.message;
                console.log(errorMessage);
            }
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
                    Conectar na sua conta
                </p>
                <TextField id="username" label="Usuário" variant="filled" />
                <TextField id="password" label="Senha" variant="filled" />
                <Button onClick={handleSubmit} variant="contained">
                    Conectar
                </Button>
            </form>
        </div>
    );
}

export default Login;
