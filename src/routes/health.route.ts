import { Router } from "express";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";

const router = Router();

router.get("/", apiKeyMiddleware, (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "API is healthy",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

export default router;
