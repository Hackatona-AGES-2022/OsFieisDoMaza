import * as dotenv from 'dotenv';

dotenv.config();

export const ENVIROMENT = {
  PORT: process.env.PORT || 8080,
  MONGODB_URI: process.env.MONGODB_URI,
}
