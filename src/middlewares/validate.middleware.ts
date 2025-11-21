import { Request, Response, NextFunction } from "express";
import { ZodError, ZodObject } from "zod";
import { StatusCodes } from "http-status-codes";

export const validate = (schema: ZodObject<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.parse(req.body);
      req.body = result; // hasil parsing tersanitasi
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));

        return res.status(StatusCodes.BAD_REQUEST).json({
          error: "Invalid data",
          details: errors,
        });
      }

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "Internal Server Error" });
    }
  };
};