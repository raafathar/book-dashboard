import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AuthorService = {
    create: async (name: string, bio:string,) => {
        return prisma.author.create({
            data: { 
                name,
                bio
            },
        });
    },

    findAll: async () => {
        return prisma.author.findMany({
            include: { books: { include: { book: true } } },
        });
    },

    findById: async (id: string) => {
        return prisma.author.findUnique({
            where: { id },
            include: { books: { include: { book: true } } },
        });
    },

    update: async (id: string, name: string, bio:string) => {
        return prisma.author.update({
            where: { id },
            data: { name, bio },
        });
    },

    delete: async (id: string) => {
        return prisma.author.delete({
            where: { id },
        });
    },
};
