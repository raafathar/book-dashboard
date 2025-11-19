import { Router } from "express";
import { PublisherController } from "../controllers/publisher.controller";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";

const router = Router();

router.use(apiKeyMiddleware);

router.post("/", PublisherController.create);
router.get("/", PublisherController.findAll);
router.get("/:id", PublisherController.findById);
router.put("/:id", PublisherController.update);
router.delete("/:id", PublisherController.delete);

export default router;
