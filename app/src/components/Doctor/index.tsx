import {
    Wrap,
    FloatChild,
    DoctorName,
    ButtonErase,
    ButtonsDiv,
    ButtonCall,
} from "./styles";

export interface IDoctor {
    name: string;
    date: string;
}

function Doctor({ name, date }: IDoctor) {
    return (
        <Wrap>
            <FloatChild>
                <DoctorName>Médico: {name}</DoctorName>
                <br />
                <DoctorName>Data: {date}</DoctorName>
            </FloatChild>
            <FloatChild>
                <DoctorName>Horário: 11:30</DoctorName>
                <br />
                <DoctorName>Email: teste@gmail.com</DoctorName>
            </FloatChild>
            <FloatChild>
                <ButtonsDiv>
                    <ButtonCall>Iniciar chamada</ButtonCall>
                    <ButtonErase>Cancelar</ButtonErase>
                </ButtonsDiv>
            </FloatChild>
        </Wrap>
    );
}

export default Doctor;
