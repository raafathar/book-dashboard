import { Format } from "@prisma/client";

export interface BookCreateRequest {
    title: string;
    isbn?: string | null;
    description?: string | null;
    coverUrl?: string | null;
    publishYear?: number | null;
    format?: Format;
    fileUrl?: string | null;
    publisherId?: string | null;
    stock?: number | null;
    authorIds?: string[];     // array UUID author
    categoryIds?: string[];   // array UUID category
}

export interface BookUpdateRequest {
    title?: string;
    isbn?: string | null;
    description?: string | null;
    coverUrl?: string | null;
    publishYear?: number | null;
    format?: Format;
    fileUrl?: string | null;
    publisherId?: string | null;
    stock?: number | null;
    authorIds?: string[];     
    categoryIds?: string[];   
}
