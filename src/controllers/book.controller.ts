import { Request, Response } from "express";
import { BookService } from "../services/book.service";
import { BookCreateRequest, BookUpdateRequest } from "../requests/book.request";
import { successResponse, errorResponse } from "../helpers/response.helper";

export const BookController =  {

    create: async (req: Request, res: Response) => {
        const data = req.body as BookCreateRequest;
        try {
            const book = await BookService.create(data);
            return successResponse(res, book, "Book created successfully", 201);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to create book", error);
        }
    },

    update: async (req: Request, res: Response) => {
        const id = req.params.id;
        const data = req.body as BookUpdateRequest;

        if (!id) return errorResponse(res, "Book id is required", null, 400);

        try {
            const book = await BookService.update(id, data);
            return successResponse(res, book, "Book updated successfully", 200);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to update book", error);
        }
    },

    findAll: async (_req: Request, res: Response) => {
        try {
            const books = await BookService.findAll();
            return successResponse(res, books, "Books retrieved successfully", 200);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to retrieve books", error);
        }
    },

    findById: async (req: Request, res: Response) => {
        const id = req.params.id;
        if (!id) return errorResponse(res, "Book id is required", null, 400)

        try {
            const book = await BookService.findById(id);
            return successResponse(res, book, "Book retrieved successfully", 200);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to retrieve book", error);
        }
    },

    delete: async (req: Request, res: Response) => {
        const id = req.params.id;
        if (!id) return errorResponse(res, "Book id is required", null, 400)

        try {
            await BookService.delete(id);
            return successResponse(res, null, "Book deleted successfully", 200);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to delete book", error);
        }
    },

};