import { Request, Response } from "express";
import { PublisherService } from "../services/publisher.service";
import { PublisherCreateRequest, PublisherUpdateRequest } from "../requests/publisher.request";
import { successResponse, errorResponse } from "../helpers/response.helper";


export const PublisherController = {
    create: async (req: Request, res: Response) => {
        const { name, address, phone } = req.body as PublisherCreateRequest;

        try {
            const publisher = await PublisherService.create(name, address, phone);
            return successResponse(res, publisher, "Publisher created successfully", 201);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to create publisher", error);
        }
    },

    findAll: async (_req: Request, res: Response) => {
        try{
            const publishers = await PublisherService.findAll();
            return successResponse(res, publishers);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failed to fetch publishers", error)
        }
    },

    findById: async (req: Request, res: Response) => {
        const { id } = req.params;
        if (!id) return errorResponse(res, "Category id is required", null, 400);

        try {
            const publisher = await PublisherService.findById(id);
            return successResponse(res, publisher);
        } catch (error) {
            console.error(error);
            return errorResponse(res, "Failde to fetch publisher", error)
        }
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, address, phone } = req.body as PublisherUpdateRequest;

        if (!id) return errorResponse(res, "Publisjer id is required", null, 400);

        try {
            const publisher = await PublisherService.update(id, name, address, phone);
            return successResponse(res, publisher, "Publisher updated successfully");
        } catch (error: any) {
            console.error(error);
            if (error.code === "P2025") return errorResponse(res, "Publisher not found", null, 404);
            return errorResponse(res, "Failed to update publisher", error);
        }
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params;
        if (!id) return errorResponse(res, "Publisher id is required", null, 400);

        try {
            await PublisherService.delete(id);
            return successResponse(res, null, "Publisher deleted successfully");
        } catch (error: any) {
            console.error(error);
            if (error.code === "P2025") return errorResponse(res, "Publisher not found", null, 404);
            return errorResponse(res, "Failed to delete publisher", error);
        }
    },

};