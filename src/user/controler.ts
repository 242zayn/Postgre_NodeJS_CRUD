/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import prisma from "../config/dbConnect";

const cretaeUser = async (req: Request, res: Response, next: NextFunction) => {
  const {
    jobTitle,
    companyName,
    hrEmail,
    hrMobile,
    currentStatus,
    description,
  } = req.body;
  console.log(req.body);

  if (
    !jobTitle ||
    !companyName ||
    !hrEmail ||
    !hrEmail ||
    !currentStatus ||
    !description
  ) {
    const err = createHttpError(400, "Please provide all the required fields");
    return next(err);
  }

  try {
    const user = await prisma.user.create({
      data: {
        jobTitle,
        companyName,
        hrEmail,
        hrMobile,
        currentStatus,
        description,
      },
    });
    if (!user) {
      const error = createHttpError(500, "Error during creating user");
      return next(error);
    } else {
      res.status(201).json({
        message: "User created successfully",
        data: user,
      });
    }
  } catch (error) {
    const err = createHttpError(500, "Error during creating user");
    return;
  }
};
// const updateUser = async (req: Request, res: Response, next: NextFunction) => {
//   const { name, email, password } = req.body;
//   const { userId } = req.params;
//   console.log(req.body);
//   console.log(userId);
//   if (!name || !email || !password) {
//     const err = createHttpError(400, "Please provide all the required fields");
//     return next(err);
//   }

//   try {
//     const existingUser = await prisma.user.findUnique({
//       where: { id: Number(userId) },
//     });
//     if (!existingUser) {
//       const err = createHttpError(400, "User not found");
//       return next(err);
//     }
//   } catch (error) {
//     const err = createHttpError(500, "Error during checking user");
//     return next(err);
//   }

//   try {
//     const user = await prisma.user.update({
//       where: { id: Number(userId) },
//       data: {
//         name,
//         email,
//         password,
//       },
//     });
//     if (!user) {
//       const error = createHttpError(500, "Error during updating user");
//       return next(error);
//     } else {
//       res.status(201).json({
//         message: "User updated successfully",
//         data: user,
//       });
//     }
//   } catch (error) {
//     const err = createHttpError(500, "Error during updating user");
//     return next(err);
//   }
// };

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.findMany();
    if (!user) {
      const err = createHttpError(400, "Error during feth all data ");
      return next(err);
    }
    res.json(user);
  } catch (error) {
    const err = createHttpError(500, "Error during fetching all data");
    return next(err);
  }
};

const getSpacialUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    });
    if (!user) {
      const err = createHttpError(404, "User not found");
      return next(err);
    }
    res.json(user);
  } catch (error) {
    const err = createHttpError(500, "Error during fetching user");
    return next(err);
  }
};

export { cretaeUser, getUser, getSpacialUser };
