export interface AddAuthorToBookRequest {
    bookId: string;
    authorId: string;
}

export interface RemoveAuthorFromBookRequest {
    bookId: string;
    authorId: string;
}