import { Response } from "express";

export const successResponse = (
    res: Response,
    data: any = null,
    message: string = "Success",
    statusCode: number = 200
) => {
    return res.status(statusCode).json({
        status: "success",
        message,
        data,
        timestamp: new Date().toISOString(),
    });
};

export const errorResponse = (
    res: Response,
    message: string = "Something went wrong",
    error: any = null,
    statusCode: number = 500
) => {
    return res.status(statusCode).json({
        status: "error",
        message,
        error,
        timestamp: new Date().toISOString(),
    });
};
