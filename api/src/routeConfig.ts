// @ts-ignore
import express from "express";
// @ts-ignore
import cors from "cors";
import {ENVIROMENT} from "../config/enviroment";
import connectToMongo from "../config/mongoConnect";
import medicoRoute from "./controllers/medicosController";

const api = express();

api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use(cors());

api.use("/api/medicos", medicoRoute);

api.listen(ENVIROMENT.PORT, async () => {
    await connectToMongo();
    console.log(`Server is running on port: ${ENVIROMENT.PORT}`)
});