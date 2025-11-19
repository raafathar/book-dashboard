import express, { Application, Request, Response } from "express";
import healthRoutes from "./routes/health.route";
import categoryRoutes from "./routes/category.route";
import authorRoutes from "./routes/author.route";
import publisherRoutes from "./routes/publisher.route";
import bookRoutes from "./routes/book.route";
import bookCategoryRoutes from "./routes/bookCategory.route";
import bookAuthorRoutes from "./routes/bookAuthor.route";


const app: Application = express();

app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/publisher", publisherRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/book-categories", bookCategoryRoutes);
app.use("/api/book-authors", bookAuthorRoutes);


export default app;
