const {setApiURL, setApiURLById, setApiURLMethod, setApiURLByIdMethod} = require('../util/apiUrl.util');
const {getBooksService, getBookByIdService, createBookService, updateBookService, deleteBookService} = require('../services/books.service');

const schema = 'books';

const getBooks = async (req, res) => {
  try {
    // Define Mockaroo API URL, using books.json as the schema
    const apiURL = setApiURL(schema);
    const books = await getBooksService(apiURL);
    
    console.log('books', books)
    
    res.status(200).send(books);
  } catch (error) {
    console.error(error);
    res.status(500).send({error: error.message});
  }
};

const getBookById = async (req, res) => {
  const bookId = req.params.id;
  try {
    // Define Mockaroo API URL, using books as the schema and bookId as the id of the book to retrieve
    const apiURLById = setApiURLById(schema, bookId);
    const book = await getBookByIdService(apiURLById);
    console.log('book', book)
    res.status(200).send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send({error: error.message});
  }

};

const createBook = async (req, res) => {
  const bookData = req.body;
  try {
    // Define Mockaroo API URL, using books as the schema and POST as the method
    const apiURL = setApiURLMethod(schema, 'POST');

    const book = await createBookService(apiURL, bookData);

    res.status(201).send({message: 'Book created', data:book});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }

};

const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const bookData = req.body;
  try {
    // Define Mockaroo API URL, using books as the schema, bookId as the id and PUT as the method
    const apiURL = setApiURLByIdMethod(schema, bookId, 'PUT');

    const updatedBook = await updateBookService(apiURL, bookData);
    console.log('updatedBook', updatedBook);
    res.status(200).json(updatedBook);
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    // Define Mockaroo API URL, using books as the schema, bookId as the id and DELETE as the method
    const apiURL = setApiURLByIdMethod(schema, bookId, 'DELETE');
    
    const bookDeleted = await deleteBookService(apiURL, bookId);

    console.log('bookDeleted', bookDeleted);

    res.status(200).send({message: 'Book deleted', data: {id: bookId}});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};