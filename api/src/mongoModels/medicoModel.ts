import {MedicoInput} from "../interfaces/input/MedicoInput";
import mongoose from "mongoose";

export interface medicoDocument extends MedicoInput, mongoose.Document {
    _id: mongoose.ObjectId;
}

const medicoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    genero: {type: String, enum: ['Masculino', 'Feminino', 'Outro'], required: true},
    registro: {type: Number, required: true}, // CRM/CFP/CRP
    senha: {type: String, required: true}
}, {
    versionKey: false
});

const medicoModel = mongoose.model('Medico', medicoSchema);

export default medicoModel;
