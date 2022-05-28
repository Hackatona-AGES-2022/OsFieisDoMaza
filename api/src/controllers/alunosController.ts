import express from "express";
import {AlunoInput} from "../interfaces/input/AlunoInput";
import AlunoModel, {alunoDocument} from "../mongoModels/alunoModel";

const alunoRoute = express.Router();

alunoRoute.post("/", async (req, res) => {
    try {
        const alunoInput: AlunoInput = req.body;
        const alunoOutput: alunoDocument = await AlunoModel.create(alunoInput);

        res.status(201).json(alunoOutput);
    } catch (couldNotCreateException) {
        res.status(400).send(couldNotCreateException.message);
    }
})

export default alunoRoute;