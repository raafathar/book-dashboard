import { Router } from "express";
import { AuthorController } from "../controllers/author.controller";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";
import { validate } from "../middlewares/validate.middleware";
import { CreateAuthorSchema, UpdateAuthorSchema } from "../validations/author.validation";

const router = Router();

router.use(apiKeyMiddleware);

router.post("/", validate(CreateAuthorSchema), AuthorController.create);
router.get("/", AuthorController.findAll);
router.get("/:id", AuthorController.findById);
router.put("/:id", validate(UpdateAuthorSchema), AuthorController.update);
router.delete("/:id", AuthorController.delete);

export default router;
