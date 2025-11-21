// src/controllers/bookAuthor.controller.ts
import { Request, Response } from "express";
import { BookAuthorService } from "../services/bookAuthor.service";
import { successResponse, errorResponse } from "../helpers/response.helper";
import { AddAuthorToBookRequest, RemoveAuthorFromBookRequest } from "../requests/bookAuthor.request";

export const BookAuthorController = {
    addAuthor: async (req: Request, res: Response) => {
        const data = req.body as AddAuthorToBookRequest;
        try {
            const bookAuthor = await BookAuthorService.addAuthorToBook(data.bookId, data.authorId);
            return successResponse(res, bookAuthor, "Author added to book successfully", 201);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to add author to book", error);
        }
    },

    removeAuthor: async (req: Request, res: Response) => {
        const data = req.body as RemoveAuthorFromBookRequest;
        try {
            const deleted = await BookAuthorService.removeAuthorFromBook(data.bookId, data.authorId);
            return successResponse(res, deleted, "Author removed from book successfully", 200);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to remove author from book", error);
        }
    },

    listAll: async (_req: Request, res: Response) => {
        try {
            const data = await BookAuthorService.findAll();
            return successResponse(res, data, "Book authors retrieved successfully", 200);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to retrieve book authors", error);
        }
    },

    listByBook: async (req: Request, res: Response) => {
        const bookId = req.params.bookId;
        if (!bookId) return errorResponse(res, "Book id is required", null, 400);
        try {
            const data = await BookAuthorService.findByBookId(bookId);
            return successResponse(res, data, "Authors for book retrieved successfully", 200);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to retrieve authors for book", error);
        }
    },

    listByAuthor: async (req: Request, res: Response) => {
        const authorId = req.params.authorId;
        if (!authorId) return errorResponse(res, "Author id is required", null, 400);
        try {
            const data = await BookAuthorService.findByAuthorId(authorId);
            return successResponse(res, data, "Books for author retrieved successfully", 200);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to retrieve books for author", error);
        }
    },
};
