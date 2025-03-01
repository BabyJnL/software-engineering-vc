class Book
{
    static _books = new Map();
    static _id = Book._books.size;

    static list = () => [...Book._books.values()];

    static searchByTitle = (title) => {
        return [...Book._books.values()].filter(book => book.title === title);
    }

    static add = (book) => {
        Book._books.set(++Book._id, { id: Book._id, ...book });
        return Book._books.get(Book._id);
    }

    static remove = (id) => {
        const book = Book._books.get(id);
        if(!book)
            return null;

        Book._books.delete(id)
        return book;
    }
}

module.exports = Book;