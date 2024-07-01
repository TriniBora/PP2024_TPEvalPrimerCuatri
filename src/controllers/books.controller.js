const {setApiURL} = require('../util/apiUrl.util');

// Define Mockaroo API URL, using books.json as the schema
const apiURL = setApiURL('books.json');
console.log(apiURL);

const getBooks = async (req, res) => {
  try {
    const books = await fetch(apiURL).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    console.log('books', books)
    
    res.status(200).send(books);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message});
  }
};

const getBookById = async (req, res) => {
  res.send('GET /books/:id');
};

const createBook = async (req, res) => {
  res.send('POST /books');
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