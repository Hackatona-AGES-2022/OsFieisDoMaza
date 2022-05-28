import {AlunoInput} from "../interfaces/input/AlunoInput";
import alunoModel from "../mongoModels/alunoModel";

exports.handler = async (event, context) => {
    if (event && event.triggerSource) {
        const cognitoId = event.request.userAttribute.sub;
        const name = event.request.userAttribute.name;
        const data = event.request.userAttribute.birthdate;
        const gender = event.request.userAttribute.gender;
        const cpf = event.request.userAttribute['custom:cpfcpf'];

        const aluno: AlunoInput = {
            nome: name,
            genero: gender,
            cpf: cpf,
            cognitoId: cognitoId,
            dataNascimento: data
        }

        try {
            const alunoOutput: AlunoInput = await alunoModel.create(aluno);

            context.done(alunoOutput, event);
        } catch (couldNotCreateException) {
            return event
        }
    }
}