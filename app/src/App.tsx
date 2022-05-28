/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef } from "react";

import Button from "./components/Button";
import Gallery from "./components/Gallery";
import { ArrowRight, ArrowLeft } from "./components/Gallery/styles";
import Icon from "./components/Icon";
import { GlobalStyles } from "./styles/globalstyles";
import {
    Container,
    Header,
    Logo,
    Main,
    FirstTitle,
    SecondTitle,
    Subtitle,
    InkGuy,
    DivButton,
    SectionAbout,
    DivProblemSolution,
    SecondSubTitle,
    TextMars,
    GalleryContent,
    ContainerAbout,
    TextLogo,
    DivLogo,
    TextSubscribe,
    SectionForm,
    SectionFooter,
    DivImageFish,
    DivFooterBottom,
    DivSocial,
    DivFooterMenu,
    LogoFooter,
    CustomA,
} from "./styles/styles";
import pixelToRem from "./utils/pxToRem";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
// General scroll to element function

function App() {
    const myRef = useRef(null);
    const myRefP = useRef(null);
    const executeScroll = () => scrollToRef(myRef);
    const executeScrollP = () => scrollToRef(myRefP);

    return (
        <>
            <Container flex="column" margin={pixelToRem(24, 112, 50)}>
                <GlobalStyles />

                <Header>
                    <DivFooterMenu>
                        <ul>
                            <li>
                                <a href="/about">Tela Inicial</a>
                            </li>

                            <li>
                                <CustomA onClick={executeScroll}>
                                    Sobre nós
                                </CustomA>
                            </li>

                            <li>
                                <CustomA onClick={executeScrollP}>
                                    Psicólogos
                                </CustomA>
                            </li>
                        </ul>
                    </DivFooterMenu>
                </Header>

                <Main>
                    <Logo />
                    <SecondTitle>
                        ENCONTRE UM PSICÓLOGO PARA AUXILIAR VOCÊ
                    </SecondTitle>

                    <Subtitle>DE QUALQUER LUGAR!</Subtitle>

                    <InkGuy />

                    <DivButton>
                        <Button text="Encontre psicólogos" fullWidth />
                    </DivButton>
                </Main>
            </Container>

            <SectionAbout ref={myRef} flex="column">
                <Container width="100%">
                    <ContainerAbout
                        width="100%"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <DivProblemSolution
                            whileInView="visible"
                            initial="initial"
                            viewport={{ once: true }}
                            variants={{
                                initial: { opacity: 0, x: 60 },

                                visible: {
                                    opacity: 1,

                                    x: 0,

                                    transition: { duration: 1, delay: 0.5 },
                                },
                            }}
                        >
                            <FirstTitle>Nosso problema e solução</FirstTitle>

                            <SecondSubTitle>
                                PROBLEMA. Como tornar a internet um local mais
                                saudável?
                            </SecondSubTitle>

                            <TextMars>
                                SOLUÇÃO. Plataforma onde voluntariamente
                                psicólogos e psiquiatras podem se disponibilizar
                                gratuitamente para realizar consultas online ou
                                presencial para grupos de pessoas que não
                                possuem condições financeiras. A plataforma será
                                disponibilizada para escolas a fim de auxiliar
                                familiares da comunidade a encontrarem ajuda
                                profissional.
                            </TextMars>
                        </DivProblemSolution>
                    </ContainerAbout>
                </Container>

                <GalleryContent ref={myRefP}>
                    <DivLogo
                        whileInView="visible"
                        initial="initial"
                        viewport={{ once: true }}
                        variants={{
                            initial: { opacity: 0, x: 60 },

                            visible: {
                                opacity: 1,

                                x: 0,

                                transition: { duration: 1, delay: 1 },
                            },
                        }}
                    >
                        <TextLogo>
                            O caminho para tornar a humanidade multiplanetária
                            <span>.</span>
                        </TextLogo>

                        <TextSubscribe
                            whileInView="visible"
                            initial="initial"
                            viewport={{ once: true }}
                            variants={{
                                initial: { opacity: 0, y: 100 },

                                visible: {
                                    opacity: 1,

                                    y: -20,

                                    transition: { duration: 1, delay: 1 },
                                },
                            }}
                        >
                            Entrar com conta
                        </TextSubscribe>
                    </DivLogo>

                    <ArrowLeft />

                    <Gallery />

                    <ArrowRight />
                </GalleryContent>
            </SectionAbout>

            <SectionForm>
                <SectionFooter>
                    <DivImageFish
                        whileInView="visible"
                        initial="initial"
                        viewport={{ once: true }}
                        variants={{
                            initial: { opacity: 0, y: 0 },

                            visible: {
                                opacity: 1,

                                y: -100,

                                transition: { duration: 0.7, delay: 0.9 },
                            },
                        }}
                    >
                        <img src="/images/fishsvg.svg" alt="" />
                    </DivImageFish>

                    <LogoFooter>
                        <Logo />
                        <TextLogo>
                            Corporis ut aliquid qui molestiae. Sed laborum sunt
                            recusandae animi dolore voluptates.
                        </TextLogo>
                    </LogoFooter>

                    <DivFooterBottom>
                        <DivSocial>
                            <img src="/images/instagram.svg" alt="" />

                            <img src="/images/linkedin.svg" alt="" />

                            <img src="/images/facebook.svg" alt="" />
                        </DivSocial>
                    </DivFooterBottom>
                </SectionFooter>
            </SectionForm>
        </>
    );
}

export default App;
