/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Container,
    Header,
    UserInk,
    UserDiv,
    SecondTitle,
    GreyTable,
    RightSideOptions,
    ButtonTerciario,
    ButtonQuartenario,
} from "./styles/styles";
import { UserStyles } from "./styles/userStyles";
import pixelToRem from "./utils/pxToRem";

function User() {
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

            <UserDiv>
                <UserInk />
                <SecondTitle>OLÁ LUCAS</SecondTitle>

                <GreyTable>
                    <p>asdasd</p>
                </GreyTable>
            </UserDiv>
        </Container>
    );
}

export default User;
