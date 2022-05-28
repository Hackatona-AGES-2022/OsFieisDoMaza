import mongoose from "mongoose";
import {ENVIROMENT} from "./enviroment";

async function connectToMongo() {
    try {
        console.log(ENVIROMENT.MONGODB_URI)
        await mongoose.connect(ENVIROMENT.MONGODB_URI);
        console.log("Connected to mongoDB");
    } catch (mongooseConnectionError) {
        console.error(`Unable to connect to mongoDB: ${mongooseConnectionError}`);
        process.exit(1);
    }
}

export default connectToMongo;