// src/controllers/bookCategory.controller.ts
import { Request, Response } from "express";
import { BookCategoryService } from "../services/bookCategory.service";
import { successResponse, errorResponse } from "../helpers/response.helper";
import { AddCategoryToBookRequest, RemoveCategoryFromBookRequest } from "../requests/bookCategory.request";

export const BookCategoryController = {
  addCategory: async (req: Request, res: Response) => {
    const data = req.body as AddCategoryToBookRequest;

    try {
      const bookCategory = await BookCategoryService.addCategoryToBook(data.bookId, data.categoryId);
      return successResponse(res, bookCategory, "Category added to book successfully", 201);
    } catch (error) {
      console.error(error);
      return errorResponse(res, "Failed to add category to book", error);
    }
  },

  removeCategory: async (req: Request, res: Response) => {
    const data = req.body as RemoveCategoryFromBookRequest;

    try {
      const deleted = await BookCategoryService.delete(data.bookId, data.categoryId);
      return successResponse(res, deleted, "Category removed from book successfully", 200);
    } catch (error) {
      console.error(error);
      return errorResponse(res, "Failed to remove category from book", error);
    }
  },

  listAll: async (_req: Request, res: Response) => {
    try {
      const data = await BookCategoryService.findAll();
      return successResponse(res, data, "Book categories retrieved successfully", 200);
    } catch (error) {
      console.error(error);
      return errorResponse(res, "Failed to retrieve book categories", error);
    }
  },

  listByBook: async (req: Request, res: Response) => {
    const bookId = req.params.bookId;
    if (!bookId) return errorResponse(res, "Book id is required", null, 400);

    try {
      const data = await BookCategoryService.findByBookId(bookId);
      return successResponse(res, data, "Book categories retrieved successfully", 200);
    } catch (error) {
      console.error(error);
      return errorResponse(res, "Failed to retrieve book categories", error);
    }
  },

  listByCategory: async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    if (!categoryId) return errorResponse(res, "Category id is required", null, 400)

    try {
      const data = await BookCategoryService.findByCategoryId(categoryId);
      return successResponse(res, data, "Books in category retrieved successfully", 200);
    } catch (error) {
      console.error(error);
      return errorResponse(res, "Failed to retrieve books in category", error);
    }
  },
};
