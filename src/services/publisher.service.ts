import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const PublisherService = {
    create: async (name: string, address: string, phone: string,) => {
        return prisma.publisher.create({
            data: {
                name,
                address,
                phone
            },
        });
    },

    findAll: async () => {
        return prisma.publisher.findMany ({
            include: { books: true },
        })
    },

    findById: async (id: string) => {
        return prisma.publisher.findUnique({
            where: { id },
            include: { books: true }
        })
    },

    update: async (id: string, name: string, address: string, phone: string, ) => {
        return prisma.publisher.update({
            where: { id },
            data: { name, address, phone },
        });
    },

    delete: async (id: string) => {
        return prisma.publisher.delete({
            where: { id },
        });
    },


}