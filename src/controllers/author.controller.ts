import { Request, response, Response } from "express";
import { AuthorService } from "../services/author.service";
import { AuthorCreateRequest, AuthorUpdateRequest } from "../requests/author.request";
import { successResponse, errorResponse } from "../helpers/response.helper";

export const AuthorController = {
    create: async (req: Request, res: Response) => {
        const { name, bio } = req.body as AuthorCreateRequest;

        try {
            const author = await AuthorService.create(name, bio);
            return successResponse(res, author, "Author created successfully", 201);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to create author", error);
        }
    },

    findAll: async (_req: Request, res: Response) => {
        try{
            const authors = await AuthorService.findAll();
            return successResponse(res, authors);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to fetch authors", error)
        }
    },

    findById: async (req: Request, res: Response) => {
        const {id} = req.params;
        if (!id) return errorResponse(res, "Author id is required", null, 400)

        try {
            const author = await AuthorService.findById(id);
            if (!author) return errorResponse(res, "Author not found", null, 404)
            return successResponse(res, author)
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to fetch author", error)
        }
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, bio } = req.body as AuthorUpdateRequest;

        if (!id) return errorResponse(res, "Author id are required", null, 400);

        try {
            const author = await AuthorService.update(id, name, bio);
            return successResponse(res, author, "Author update successfully")
        } catch (error: any) {
            console.error(error);
            if (error.code === "P2025") return errorResponse(res, "Author not found", null, 404);
            return errorResponse(res, "Failed to update author", error);
        }
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params;
        if (!id) return errorResponse(res, "Author id is required", null, 400);

        try {
            await AuthorService.delete(id);
            return successResponse(res, null, "Author deleted successfully");
        } catch (error: any) {
            console.error(error);
            if (error.code === "P2025") return errorResponse(res, "Author not found", null, 404);
            return errorResponse(res, "Failed to delete category", error);
        }
    },
    
};
