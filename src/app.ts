import express, { Application, Request, Response } from "express";
import healthRoutes from "./routes/health.route";

const app: Application = express();

app.use("/health", healthRoutes);

export default app;
