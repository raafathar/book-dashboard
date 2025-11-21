import { z } from "zod";

export const CreatePublisherSchema = z.object({
    name: z.string({
        error: (iss) =>
        iss.input === undefined
            ? "Name is required."
            : "Name must be a string.",
    })
    .min(3, { message: "Name must be at least 3 characters." })
    .max(100, { message: "Name cannot exceed 100 characters." }),

    address: z.string({
        error: (iss) =>
        iss.input === undefined
            ? "Address is required."
            : "Address must be a string.",
    })
    .min(5, { message: "Address must be at least 5 characters." })
    .max(500, { message: "Address cannot exceed 500 characters." })
    .optional(),

    phone: z.string({
        error: (iss) =>
            iss.input === undefined
            ? "Phone is required."
            : "Phone must be a string.",
    })
    .min(8, { message: "Phone must be at least 8 characters."})
    .max(15, { message: "Phone cannot exceed 15 characters."})
    .optional(),
});

export const UpdatePublisherSchema = z.object({
    name:
        z.string( { message: "Name must be a string"} )
        .min(3, { message: "Name must be at least 3 characters." })
        .max(100, { message: "Name cannot exceed 100 characters." })
        .optional(),

    address:
        z.string( { message: "Address must be a string"} )
        .min(5, { message: "Address must be at least 5 characters." })
        .max(500, { message: "Address cannot exceed 500 characters." })
        .optional(),

    phone:
        z.string( { message: "Phone must be a string" } )
        .min(8, { message: "Phone must be at least 8 characters."})
        .max(15, { message: "Phone cannot exceed 15 characters."})
        .optional(),
});
