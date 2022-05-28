import {MedicoInput} from "../interfaces/input/MedicoInput";
import medicoModel, {medicoDocument} from "../mongoModels/medicoModel";

exports.handler = async (event, context) => {
    if (event && event.triggerSource) {
        const cognitoId = event.request.userAttribute.sub;
        const name = event.request.userAttribute.name;
        const email = event.request.userAttribute.email;
        const gender = event.request.userAttribute.gender;
        const registro = event.request.userAttribute['custom:crmcrp'];

        const medico: MedicoInput = {
            nome: name,
            genero: gender,
            email: email,
            registro: registro,
            cognitoId: cognitoId
        }

        try {
            const medicoOutput: medicoDocument = await medicoModel.create(medico);

            context.done(medicoOutput, event);
        } catch (couldNotCreateException) {
            return event
        }
    }
}