/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef } from "react";

import Button from "./components/Button";
import Gallery from "./components/Gallery";
import { ArrowRight, ArrowLeft } from "./components/Gallery/styles";
import Icon from "./components/Icon";
import CardMedico from "./components/MedicoCard";
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
    MiddleOptions,
    RightSideOptions,
    LogoFooter,
    ButtonPrimario,
    ButtonSecundario,
    ButtonLanguage,
    TextRights,
    CustomA,
    SectionPsycolo,
    ContainerPsycolo,
    FirstTitleMedicos,
    DivDoctors,
} from "./styles/styles";
import pixelToRem from "./utils/pxToRem";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
// General scroll to element function

const response = [
    {
        id: 1,
        nome: "Johnny",
        endereco: "Endereço: Rua Afonto Taunay, 190",
        horaVaga: "Horarios: 11:00 - 11:30 - 12:00 - 12:30",
    },
    {
        id: 2,
        nome: "Jenny",
        endereco: "Endereço: Rua dos Andradas, 776",
        horaVaga: "Horarios: 11:00 - 11:30 - 12:00 - 12:30",
    },
    {
        id: 3,
        nome: "Sam",
        endereco: "Endereço: Rua General Portinho, 990",
        horaVaga: "Horarios: 11:00 - 11:30 - 12:00 - 12:30",
    },
    {
        id: 4,
        nome: "Dean",
        endereco: "Endereço: Rua Jose Siqueira, 881",
        horaVaga: "Horarios: 11:00 - 11:30 - 12:00 - 12:30",
    },
    {
        id: 5,
        nome: "Don",
        endereco: "Endereço: Av Ipiranga, 8861",
        horaVaga: "Horarios: 11:00 - 11:30 - 12:00 - 12:30",
    },
    {
        id: 6,
        nome: "Dun",
        endereco: "Endereço: Rua General Camara, 1200",
        horaVaga: "Horarios: 11:00 - 11:30 - 12:00 - 12:30",
    },
];

function App() {
    const myRef = useRef(null);
    const myRefP = useRef(null);
    const executeScroll = () => scrollToRef(myRef);
    const executeScrollP = () => scrollToRef(myRefP);

    return (
        <>
            <Container flex="column" margin={pixelToRem(24, 50, 50)}>
                <GlobalStyles />

                <Header>
                    <MiddleOptions>
                        <ul>
                            <li>
                                <a href="/">Tela Inicial</a>
                            </li>

                            <li>
                                <CustomA onClick={executeScroll}>
                                    Sobre nós
                                </CustomA>
                            </li>

                            <li>
                                <CustomA onClick={executeScrollP}>
                                    Profissionais
                                </CustomA>
                            </li>
                        </ul>
                    </MiddleOptions>
                    <RightSideOptions>
                        <ButtonPrimario>
                            <a href="/">Criar conta</a>
                        </ButtonPrimario>
                        <ButtonSecundario>
                            <a href="/">Entrar</a>
                        </ButtonSecundario>
                        <ButtonLanguage>
                            <a href="/">BR</a>
                            <img src="/images/ArrowDown.svg" alt="" />
                        </ButtonLanguage>
                    </RightSideOptions>
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
                            <FirstTitle>
                                <img
                                    src="/images/NossaProblemaSolucao.svg"
                                    alt=""
                                />
                            </FirstTitle>

                            <SecondSubTitle>
                                <span>PROBLEMA. </span>
                                Como tornar a internet um local mais saudável?
                            </SecondSubTitle>

                            <TextMars>
                                <span>SOLUÇÃO. </span>
                                Plataforma onde voluntariamente psicólogos e
                                psiquiatras podem se disponibilizar
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
            </SectionAbout>

            <SectionPsycolo ref={myRefP} flex="column">
                <Container width="100%">
                    <ContainerPsycolo
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
                            <FirstTitleMedicos>
                                <img
                                    src="/images/MedicosPlataformaCompleto.svg"
                                    alt=""
                                />
                            </FirstTitleMedicos>

                            <DivDoctors>
                                {response.map((item: any) => {
                                    return (
                                        <CardMedico
                                            src="/images/image1.png"
                                            properties={item}
                                        />
                                    );
                                })}
                            </DivDoctors>
                        </DivProblemSolution>
                    </ContainerPsycolo>
                </Container>
            </SectionPsycolo>

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
                            Nossa Mente tem como objetivo central promover a
                            inclusão digital e facilitar o acesso de comunidades
                            menos favorecidas à profissionais da saúde mental,
                            proporcionando uma qualidade de vida e bem estar a
                            todos.
                        </TextLogo>

                        <TextRights>©2022 All rights reserved</TextRights>
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
