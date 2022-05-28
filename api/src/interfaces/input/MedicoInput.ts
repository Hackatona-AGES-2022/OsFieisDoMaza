import {Genero} from "../../enums/genero";

export interface MedicoInput {
    nome:string;
    email:string;
    genero:Genero;
    registro:string // CRM/CFP/CRP
    senha:string;
}