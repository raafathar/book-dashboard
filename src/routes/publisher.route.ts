import { Router } from "express";
import { PublisherController } from "../controllers/publisher.controller";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";
import { validate } from "../middlewares/validate.middleware";
import { CreatePublisherSchema, UpdatePublisherSchema } from "../validations/publisher.validation";

const router = Router();

router.use(apiKeyMiddleware);

router.post("/", validate(CreatePublisherSchema), PublisherController.create);
router.get("/", PublisherController.findAll);
router.get("/:id", PublisherController.findById);
router.put("/:id", validate(UpdatePublisherSchema), PublisherController.update);
router.delete("/:id", PublisherController.delete);

export default router;
