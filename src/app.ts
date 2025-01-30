import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "./config/config";
import userRouter from "./user/routes";
import globleErrorHandler from "./middleware/globleErrorHandler";

const app = express();

app.use(
  cors({
    origin: config.FRONTEND_URL,
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use(globleErrorHandler);

export default app;
