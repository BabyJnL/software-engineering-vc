const router = require('express').Router();
const BookController = require('../controller/BookController');

router.get('/', BookController.index);
router.get('/:title', BookController.show);
router.post('/', BookController.create);
router.delete('/:id', BookController.delete);

module.exports = router;