import express from "express";
import {MedicoInput} from "../interfaces/input/MedicoInput";
import medicoModel, {medicoDocument} from "../mongoModels/medicoModel";

const medicoRoute = express.Router();

medicoRoute.post("/", async (req, res) => {
    try {
        const medicoInput: MedicoInput = req.body;
        const medicoOutput: medicoDocument = await medicoModel.create(medicoInput);

        res.status(201).json(medicoOutput);
    } catch (couldNotCreateException) {
        res.status(400).send(couldNotCreateException.message);
    }
});

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
        const medicos: Array<medicoDocument> = await medicoModel.find().limit(3);
        res.status(200).json(medicos);
    } catch (couldNotGetMedicosException) {
        res.status(400).send(couldNotGetMedicosException.message);
    }
});

export default medicoRoute;