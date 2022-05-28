import {AlunoInput} from "../interfaces/input/AlunoInput";
import mongoose from "mongoose";

export interface alunoDocument extends AlunoInput, mongoose.Document{
    _id: mongoose.ObjectId;
}
const alunoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    genero: {type: String, enum: ['Masculino', 'Feminino', 'Outro'], required: true},
    cpf: {type: String, required: true},
    senha: {type: String, required: true}
}, {
    versionKey: false
});

const alunoModel = mongoose.model('Medico', alunoSchema);

export default alunoModel;