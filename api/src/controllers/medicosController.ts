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
})

export default medicoRoute;