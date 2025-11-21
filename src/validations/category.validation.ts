import { z } from "zod";

export const CreateCategorySchema = z.object({
    name: z.string({
        error: (iss) =>
        iss.input === undefined
            ? "Name is required."
            : "Name must be a string.",
    })
    .min(3, { message: "Name must be at least 3 characters." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
});

export const UpdateCategorySchema = z.object({
    name:
        z.string( { message: "Name must be a string"} )
        .min(3, { message: "Name must be at least 3 characters." })
        .max(100, { message: "Name cannot exceed 100 characters." })
        .optional(),
});
