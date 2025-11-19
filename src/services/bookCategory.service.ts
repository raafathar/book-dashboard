import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const BookCategoryService = {
    findAll: async () => {
        return prisma.bookCategory.findMany({
        include: {
            book: true,
            category: true,
        },
        });
    },

    findByBookId: async (bookId: string) => {
        return prisma.bookCategory.findMany({
            where: { bookId },
            include: { category: true },
        });
    },

    findByCategoryId: async (categoryId: string) => {
        return prisma.bookCategory. findMany({
            where: { categoryId },
            include: { book: true },
        });
    },

    delete: async (bookId: string, categoryId: string) => {
            return prisma.bookCategory.delete({
            where: { bookId_categoryId: { bookId, categoryId } },
        });
    },

    addCategoryToBook: async (bookId: string, categoryId: string) => {
        return prisma.bookCategory.create({
            data: { bookId, categoryId },
        });
    },
};
