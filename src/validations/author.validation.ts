import { z } from "zod";

export const CreateAuthorSchema = z.object({
    name: z.string({
        error: (iss) =>
        iss.input === undefined
            ? "Name is required."
            : "Name must be a string.",
    })
    .min(3, { message: "Name must be at least 3 characters." })
    .max(100, { message: "Name cannot exceed 100 characters." }),

    bio: z.string({
        error: (iss) =>
        iss.input === undefined
            ? "Bio is required."
            : "Bio must be a string.",
    })
    .min(5, { message: "Bio must be at least 5 characters." })
    .max(500, { message: "Bio cannot exceed 500 characters." }),
});

export const UpdateAuthorSchema = z.object({
    name:
        z.string( { message: "Name must be a string"} )
        .min(3, { message: "Name must be at least 3 characters." })
        .max(100, { message: "Name cannot exceed 100 characters." })
        .optional(),

    bio:
        z.string( { message: "Bio must be a string"} )
        .min(5, { message: "Bio must be at least 5 characters." })
        .max(500, { message: "Bio cannot exceed 500 characters." })
        .optional(),
});
