import { Router } from "express";
import { AuthorController } from "../controllers/author.controller";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";

const router = Router();

router.use(apiKeyMiddleware);

router.post("/", AuthorController.create);
router.get("/", AuthorController.findAll);
router.get("/:id", AuthorController.findById);
router.put("/:id", AuthorController.update);
router.delete("/:id", AuthorController.delete);

export default router;
