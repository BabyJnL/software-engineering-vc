const Book = require('../model/Book');

class BookController
{
    static index = (req, res) => {
        const books = Book.list();
        return books.length > 0 ? res.status(200).json({ message: 'Books found', data: books }) : res.status(404).json({ message: 'No books found' });
    }

    static create = (req, res) => {
        const book = Book.add(req.body);
        res.status(201).json({ message: 'Book created', data: book});
    }

    static delete = (req, res) => {
        const book = Book.remove(req.params.id);
        return !book ? res.status(404).json({ message: 'Book not found' }) : res.status(200).json({ message: 'Book deleted', data: book});
    } 
}

module.exports = BookController;