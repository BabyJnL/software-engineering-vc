class Book
{
    static _books = new Map();
    static _id = Book._books.size;

    static list = () => [...Book._books.values()];

    static add = (book) => {
        Book._books.set(++Book._id, { id: Book._id, ...book });
        return Book._books.get(Book._id);
    }

    static remove = (id) => {
        return Book._books.has(id) ? Book._books.delete(id) : null;
    }
}

module.exports = Book;