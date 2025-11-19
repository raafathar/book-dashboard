import { Router } from "express";
import { BookAuthorController } from "../controllers/bookAuthor.controller";
import { apiKeyMiddleware } from "../middlewares/apiKey.middleware";

const router = Router();

router.use(apiKeyMiddleware);

router.post("/", BookAuthorController.addAuthor);
router.delete("/", BookAuthorController.removeAuthor);
router.get("/", BookAuthorController.listAll);
router.get("/book/:bookId", BookAuthorController.listByBook);
router.get("/author/:authorId", BookAuthorController.listByAuthor);

export default router;
