import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import { Amplify, Auth } from "aws-amplify";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function RegisterStudent() {
    Amplify.configure({
        aws_cognito_region: "us-west-2",

        aws_user_pools_id: "us-west-2_9NVDM08CD",

        aws_user_pools_web_client_id: "6447gbdi0emub6faek29j50oal",
    });

    const navigate = useNavigate();

    const [gender, setGender] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    const handleSignUp = async (e: React.SyntheticEvent<Element, Event>) => {
        e.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement)
            .value;

        const gender = (document.getElementById("gender") as HTMLInputElement)
            .value;

        const email = (document.getElementById("email") as HTMLInputElement)
            .value;

        const birthdate = (
            document.getElementById("birthdate") as HTMLInputElement
        ).value;
        const cpfcpf = (document.getElementById("cpf") as HTMLInputElement)
            .value;

        const password = (
            document.getElementById("password") as HTMLInputElement
        ).value;

        try {
            await Auth.signUp({
                username: cpfcpf,

                // eslint-disable-next-line object-shorthand

                password,

                attributes: {
                    email,

                    name,

                    // eslint-disable-next-line object-shorthand

                    gender,

                    birthdate,
                    "custom:cpfcpf": cpfcpf,
                },
            });
            navigate("/register/student/confirm");
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
                    Criar nova conta
                </p>

                <TextField id="name" label="Nome" variant="filled" />

                <FormControl fullWidth variant="filled">
                    <InputLabel id="demo-simple-select-label">
                        Gênero
                    </InputLabel>

                    <Select
                        labelId="demo-simple-select-label"
                        id="gender"
                        value={gender}
                        label="Gênero"
                        onChange={handleChange}
                    >
                        <MenuItem value="M">Masculino</MenuItem>

                        <MenuItem value="F">Feminino</MenuItem>

                        <MenuItem value="O">Outro</MenuItem>
                    </Select>
                </FormControl>

                <TextField id="email" label="Email" variant="filled" />
                <TextField id="cpf" label="CPF" variant="filled" />
                <TextField
                    id="birthdate"
                    label="Data de nascimento"
                    variant="filled"
                />

                <TextField id="password" label="Senha" variant="filled" />

                <Button onClick={handleSignUp} variant="contained">
                    Cadastrar
                </Button>
            </form>
        </div>
    );
}

export default RegisterStudent;
