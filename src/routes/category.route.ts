import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";

const router = Router();

router.use(apiKeyMiddleware);

router.post("/", CategoryController.create);
router.get("/", CategoryController.findAll);
router.get("/:id", CategoryController.findById);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.delete);

export default router;
