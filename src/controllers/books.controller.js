const {setApiURL, setApiURLById, setApiURLMethod} = require('../util/apiUrl.util');
const {getBooksService, getBookByIdService, createBookService} = require('../services/books.service');

const schema = 'books';
const apiKey = process.env.MOCKAROO_API_KEY;

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
  try {
    const bookId = req.params.id;
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
    // Define Mockaroo API URL, using books as the schema
    const apiURL = setApiURLMethod(schema, 'POST');

    const book = await createBookService(apiURL, bookData);

    res.status(201).send({message: 'Book created', data:book});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }

};

const updateBook = async (req, res) => {
  res.send('PUT /books/:id');
};

const deleteBook = async (req, res) => {
  res.send('DELETE /books/:id');
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};