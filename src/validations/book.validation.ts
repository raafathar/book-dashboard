import { z } from "zod";
import { Format } from "@prisma/client";

export const CreateBookSchema = z.object({
    title: z.string({
        error: (iss) =>
            iss.input === undefined
            ? "Title is required."
            : "Title must be a string.",
    })
    .min(3, { message: "Title must be at least 3 characters." })
    .max(100, { message: "Title cannot exceed 100 characters." }),
    isbn:
        z.string({ message: "ISBN must be a string."}).optional(),
    description:
        z.string({ message: "Description must be a string."}).optional(),
    coverUrl:
        z.string( { message: "Cover url must be a string" } ).optional(),
    publishYear:
        z.number({ message: "Publish year must be a number" }).optional(),
    format:
        z.enum(Object.values(Format) as [Format, ...Format[]]).optional(),
    stock:
        z.number({ message: "Stock must be a number" }),
    publisherId:
        z.string({ message: "Publisher ID must be a string." }).uuid("Publisher ID must be a valid UUID.").optional(),
    authorIds:
        z.array(
            z.string({ message: "Author ID must be a string." }).uuid("Each Author ID must be a valid UUID.")
        )
        .optional(),
    categoryIds:
        z.array(
            z.string({ message: "Category ID must be a string." }).uuid("Each Category ID must be a valid UUID.")
        )
        .optional(),
});