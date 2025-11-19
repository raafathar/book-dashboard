import { Router } from "express";
import { BookController } from "../controllers/book.controller";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";

const router = Router();

router.use(apiKeyMiddleware);

router.post("/", BookController.create);
router.get("/", BookController.findAll);
router.get("/:id", BookController.findById);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.delete);

export default router;
