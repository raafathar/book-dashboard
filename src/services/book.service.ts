import { Format, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CreateBookInput {
    title: string;
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

export const BookService = {
    create: async (data: CreateBookInput) => {
        const book = await prisma.book.create({
            data: {
                title: data.title,
                isbn: data.isbn ?? null,
                description: data.description ?? null,
                coverUrl: data.coverUrl ?? null,
                publishYear: data.publishYear ?? null,
                format: data.format ?? Format.PHYSICAL,
                fileUrl: data.fileUrl ?? null,
                publisherId: data.publisherId ?? null,
                stock: data.stock ?? null,
                authors: {
                    create: data.authorIds?.map((authorId) => ({ authorId })) || [],
                },
                categories: {
                    create: data.categoryIds?.map((categoryId) => ({ categoryId })) || [],
                },
            },
            include: {
                authors: true,
                categories: true,
            },
        });

        return book;
    },

    findAll: async () => {
        return prisma.book.findMany({
            include: {
                authors: true,
                categories: true,
            },
        });
    },

    findById: async (id: string) => {
        return prisma.book.findUnique({
            where: { id },
            include: {
                authors: true,
                categories: true,
            },
        });
    },

    update: async (id: string, data: Partial<CreateBookInput>) => {
        const { title, isbn, description, coverUrl, publishYear, format, fileUrl, publisherId, stock, authorIds, categoryIds } = data;

        const updateData: any = {};

        if (title !== undefined) updateData.title = title;
        if (isbn !== undefined) updateData.isbn = isbn;
        if (description !== undefined) updateData.description = description;
        if (coverUrl !== undefined) updateData.coverUrl = coverUrl;
        if (publishYear !== undefined) updateData.publishYear = publishYear;
        if (format !== undefined) updateData.format = format;
        if (fileUrl !== undefined) updateData.fileUrl = fileUrl;
        if (publisherId !== undefined) updateData.publisherId = publisherId;
        if (stock !== undefined) updateData.stock = stock;

        // nested relation
        if (authorIds) {
            updateData.authors = {
            set: authorIds.map((authorId) => ({ authorId })), // replace authors
            };
        }

        if (categoryIds) {
            updateData.categories = {
            set: categoryIds.map((categoryId) => ({ categoryId })), // replace categories
            };
        }

        const updatedBook = await prisma.book.update({
            where: { id },
            data: updateData,
            include: {
            authors: true,
            categories: true,
            },
        });

        return updatedBook;
    },


    delete: async (id: string) => {
        try {
            await prisma.bookAuthor.deleteMany({
                where: { bookId: id },
            });
            await prisma.bookCategory.deleteMany({
                where: { bookId: id },
            });
            const deletedBook = await prisma.book.delete({
                where: { id },
                include: {
                    authors: true,
                    categories: true,
                },
            });
            return deletedBook;
        } catch (error) {
            throw error;
        }
    }

};
