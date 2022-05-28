import express from "express";
import medicoModel, {medicoDocument} from "../mongoModels/medicoModel";

const medicoRoute = express.Router();

medicoRoute.get("/:id", async (req, res) => {
    try {
        const idMedico: string = req.params.id;

        const getMedicoResponse: medicoDocument = await medicoModel.findOne({cognitoId: idMedico});
        if (getMedicoResponse) {
            res.status(200).json(getMedicoResponse);
        }
        res.status(404).json({"Message": "Medico nao registrado."})
    } catch (couldNotGetMedicoException) {
        res.status(400).send(couldNotGetMedicoException.message);
    }
});

medicoRoute.get("/", async (_req, res) => {
    try {
        const medicos: Array<medicoDocument> = await medicoModel.find();
        res.status(200).json(medicos);
    } catch (couldNotGetMedicosException) {
        res.status(400).send(couldNotGetMedicosException.message);
    }
});

// medicoRoute.post("/agenda", async(req, res) => {
//     const horario: Horario = req.body;
//
//     try {
//
//     }catch(couldNotCreateHorario) {
//         res.status(400).json(couldNotCreateHorario)
//     }
// });

export default medicoRoute;