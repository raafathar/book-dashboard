import { Request, Response, NextFunction } from "express";

export const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.header("x-api-key");

    if (!apiKey) {
        return res.status(401).json({
            status: "error",
            message: "API key is required",
        });
    }

    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({
            status: "error",
            message: "Invalid API key",
        });
    }

    next();
};
