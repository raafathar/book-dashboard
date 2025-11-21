// src/routes/bookCategory.routes.ts
import { Router } from "express";
import { BookCategoryController } from "../controllers/bookCategory.controller";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";

const router = Router();

router.use(apiKeyMiddleware);

router.post("/", BookCategoryController.addCategory);
router.get("/", BookCategoryController.listAll);
router.get("/book/:bookId", BookCategoryController.listByBook);
router.get("/category/:categoryId", BookCategoryController.listByCategory);
router.delete("/", BookCategoryController.removeCategory);

export default router;
