import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CategoryService = {
    create: async (name: string) => {
        return prisma.category.create({
            data: { name },
        });
    },

    findAll: async () => {
        return prisma.category.findMany({
            include: { books: true },
        });
    },

    findById: async (id: string) => {
        return prisma.category.findUnique({
            where: { id },
            include: { books: true },
        });
    },

    update: async (id: string, name: string) => {
        return prisma.category.update({
            where: { id },
            data: { name },
        });
    },

    delete: async (id: string) => {
        return prisma.category.delete({
            where: { id },
        });
    },
};
