// src/services/bookAuthor.service.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const BookAuthorService = {
    findAll: async () => {
        return prisma.bookAuthor.findMany({
        include: {
            book: true,
            author: true,
        },
        });
    },

    findByBookId: async (bookId: string) => {
        return prisma.bookAuthor.findMany({
        where: { bookId },
        include: { author: true },
        });
    },

    findByAuthorId: async (authorId: string) => {
        return prisma.bookAuthor.findMany({
        where: { authorId },
        include: { book: true },
        });
    },

    addAuthorToBook: async (bookId: string, authorId: string) => {
        return prisma.bookAuthor.create({
        data: { bookId, authorId },
        });
    },

    removeAuthorFromBook: async (bookId: string, authorId: string) => {
        return prisma.bookAuthor.delete({
        where: { bookId_authorId: { bookId, authorId } },
        });
    },
};
