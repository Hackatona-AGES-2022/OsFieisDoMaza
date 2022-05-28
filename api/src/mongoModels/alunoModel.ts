import mongoose from "mongoose";
import {AlunoInput} from "../interfaces/input/AlunoInput";

export interface medicoDocument extends AlunoInput, mongoose.Document {
    _id: mongoose.ObjectId;
}

const alunoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    genero: {type: String, enum: ['Masculino', 'Feminino', 'Outro'], required: true},
    cpf: {type: String, required: true, unique: true}, // CRM/CFP/CRP
    cognitoId: {type: String, required: true, unique: true},
    dataNascimento: {type: Date, required: true}
}, {
    versionKey: false
});

const alunoModel = mongoose.model('Aluno', alunoSchema);

export default alunoModel;
