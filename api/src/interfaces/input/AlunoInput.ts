import {Genero} from "../../enums/genero";

export interface AlunoInput {
    cpf:string;
    nome:string;
    dataNascimento:Date;
    genero:Genero;
    cognitoId:string;
}