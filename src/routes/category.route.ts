import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";
import { validate } from "../middlewares/validate.middleware";
import { CreateCategorySchema, UpdateCategorySchema } from "../validations/category.validation";

const router = Router();

router.use(apiKeyMiddleware);

router.post("/", validate(CreateCategorySchema), CategoryController.create);
router.get("/", CategoryController.findAll);
router.get("/:id", CategoryController.findById);
router.put("/:id", validate(UpdateCategorySchema), CategoryController.update);
router.delete("/:id", CategoryController.delete);

export default router;
