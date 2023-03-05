import { NextFunction, Request, Response } from "express";
import AppError from "../utils/appError";

export const requireUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // res.locals persiste apenas durante o ciclo de vida de um response
    const user = res.locals.user;

    if (!user) {
      return next(
        new AppError(400, `Session has expired or user doesn't exist`)
      );
    }

    next();
  } catch (err: any) {
    next(err);
  }
};
