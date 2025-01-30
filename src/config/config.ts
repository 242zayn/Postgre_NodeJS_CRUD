import { config as conf } from "dotenv";
conf();

const _congig = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  env: process.env.NODE_ENV,
  FRONTEND_URL: process.env.FRONTEND_URL,
};

export const config = Object.freeze(_congig);
