/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Container,
    Header,
    UserInk,
    Main,
    SecondTitle,
    GreyTable,
    InkGuy,
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

            <Main>
                <UserInk />
                <SecondTitle>OLÁ LUCAS</SecondTitle>

                <GreyTable>
                    <p>asdasd</p>
                </GreyTable>
            </Main>
        </Container>
    );
}

export default User;
