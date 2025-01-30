import express, { Request, Response } from "express";
import { cretaeUser, getSpacialUser, getUser } from "./controler";

const userRouter = express.Router();

userRouter.get("/test", (req: Request, res: Response) => {
  res.json({
    message:
      "This project create using many technology as like Node js , express js and Postgres and Prisma ",
  });
});

userRouter.post("/create", cretaeUser);
// userRouter.put("/update/:userId", updateUser);
userRouter.get("/jobs", getUser);
userRouter.get("/:userId", getSpacialUser);

export default userRouter;
