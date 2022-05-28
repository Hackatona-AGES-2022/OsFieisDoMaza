/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import {
    Container,
    Header,
    UserDiv,
    RightSideOptions,
    ButtonTerciario,
    ButtonQuartenario,
} from "./styles/styles";
import { UserStyles } from "./styles/userStyles";
import pixelToRem from "./utils/pxToRem";

function Doctor() {
    const response = [
        { id: 1, name: "Johnny", gender: "male", age: 30, date: "22/09/2022" },
        { id: 2, name: "Jenny", gender: "female", age: 28, date: "04/11/2022" },
        { id: 3, name: "Sam", gender: "male", age: 13, date: "30/12/2022" },
        { id: 4, name: "Dean", gender: "male", age: 8, date: "02/01/2022" },
    ];

    return (
        <Container flex="column" margin={pixelToRem(24, 50, 50)}>
            <UserStyles />

            <Header>
                <RightSideOptions>
                    <ButtonTerciario>
                        <a href="/">Tela Inicial</a>
                    </ButtonTerciario>
                    <ButtonQuartenario>
                        <a href="/">Sair</a>
                    </ButtonQuartenario>
                </RightSideOptions>
            </Header>

            <UserDiv />
        </Container>
    );
}

export default Doctor;
