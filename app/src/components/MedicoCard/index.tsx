import {
    BlankDiv,
    PrimaryColorDiv,
    ImgDiv,
    TextDiv,
    TextDivSecond,
    GreenBar,
    ButtonDiv,
} from "./styles";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface MedicCard {
    src: any;

    properties: {
        nome: string;
        endereco: string;
        horaVaga: string;
    };

    // eslint-disable-next-line react/require-default-props
}

function CardMedico({ src, properties }: MedicCard) {
    return (
        <BlankDiv>
            <PrimaryColorDiv>
                <ImgDiv>
                    <img src={src} alt="" />
                </ImgDiv>
                <TextDiv>
                    <span>{properties.nome}</span>
                    <TextDivSecond>
                        <span>{properties.endereco}</span>
                    </TextDivSecond>
                    <TextDivSecond>
                        <span>{properties.horaVaga}</span>
                    </TextDivSecond>
                    <ButtonDiv>
                        <a href="/">
                            <img
                                src="/images/RoundButton.svg"
                                alt=""
                                width="24px"
                                height="24px"
                            />
                        </a>
                    </ButtonDiv>
                    <GreenBar />
                </TextDiv>
            </PrimaryColorDiv>
        </BlankDiv>
    );
}

export default CardMedico;
