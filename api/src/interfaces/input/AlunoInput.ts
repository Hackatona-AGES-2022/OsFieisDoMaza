import {Genero} from "../../enums/genero";

export interface AlunoInput{
    nome:string;
    email:string;
    genero:Genero;
    cpf:string 
    senha:string;
}