import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { CategoryCreateRequest, CategoryUpdateRequest } from "../requests/category.request";
import { successResponse, errorResponse } from "../helpers/response.helper";

export const CategoryController = {
    create: async (req: Request, res: Response) => {
        const { name } = req.body as CategoryCreateRequest;

        if (!name) return errorResponse(res, "Category name is required", null, 400);

        try {
            const category = await CategoryService.create(name);
            return successResponse(res, category, "Category created successfully", 201);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to create category", error);
        }
    },

    findAll: async (_req: Request, res: Response) => {
        try {
            const categories = await CategoryService.findAll();
            return successResponse(res, categories);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to fetch categories", error);
        }
    },

    findById: async (req: Request, res: Response) => {
        const { id } = req.params;
        if (!id) return errorResponse(res, "Category id is required", null, 400);

        try {
            const category = await CategoryService.findById(id);
            if (!category) return errorResponse(res, "Category not found", null, 404);
            return successResponse(res, category);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to fetch category", error);
        }
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name } = req.body as CategoryUpdateRequest;
        if (!id || !name) return errorResponse(res, "Category id and name are required", null, 400);

        try {
            const category = await CategoryService.update(id, name);
            return successResponse(res, category, "Category updated successfully");
        } catch (error: any) {
            console.error(error);
            if (error.code === "P2025") return errorResponse(res, "Category not found", null, 404);
            return errorResponse(res, "Failed to update category", error);
        }
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params;
        if (!id) return errorResponse(res, "Category id is required", null, 400);

        try {
            await CategoryService.delete(id);
            return successResponse(res, null, "Category deleted successfully");
        } catch (error: any) {
            console.error(error);
            if (error.code === "P2025") return errorResponse(res, "Category not found", null, 404);
            return errorResponse(res, "Failed to delete category", error);
        }
    },
};
