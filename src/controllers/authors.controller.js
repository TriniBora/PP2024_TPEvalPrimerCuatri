const {setApiURL, setApiURLById, setApiURLMethod, setApiURLByIdMethod} = require('../util/apiUrl.util');
const {getAuthorsService, getAuthorByIdService, createAuthorService, updateAuthorService, deleteAuthorService} = require('../services/authors.service');
const {getBookByIdService} = require('../services/books.service');


const schema = 'authors';

const getAuthors = async (req, res) => {
  try {
    // Define Mockaroo API URL, using authors.json as the schema
    const apiURL = setApiURL(schema);
    const authors = await getAuthorsService(apiURL);
    
    console.log('authors', authors)
    
    res.status(200).send({data: authors});
  } catch (error) {
    console.error(error);
    res.status(500).send({error: error.message});
  }
};

const getAuthorById = async (req, res) => {
  const authorId = req.params.id;
  try {
    // Define Mockaroo API URL, using authors as the schema and authorId as the id of the author to retrieve
    const apiURLById = setApiURLById(schema, authorId);
    const author = await getAuthorByIdService(apiURLById);
    console.log('author', author)

    // Get all author's books with their data
    const authorBooksIds = author.books_ids;

    if(authorBooksIds.length > 0) {
      // Get book data for each book id
      const authorBooks = await Promise.all(authorBooksIds.map(async (bookId) => { //Using Promise.all to wait for all promises to resolve
        const apiURLBookById = setApiURLById('books', bookId);
        const book = await getBookByIdService(apiURLBookById);
        return book;
      }));
      author.books_ids = authorBooks;
    }

    res.status(200).send({data: author});
  } catch (error) {
    console.error(error);
    res.status(500).send({error: error.message});
  }

};

const createAuthor = async (req, res) => {
  const authorData = req.body;
  try {
    // Define Mockaroo API URL, using authors as the schema and POST as the method
    const apiURL = setApiURLMethod(schema, 'POST');

    const author = await createAuthorService(apiURL, authorData);

    res.status(201).send({message: 'Author created', data:author});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }

};

const updateAuthor = async (req, res) => {
  const authorId = req.params.id;
  const authorData = req.body;
  try {
    // Define Mockaroo API URL, using authors as the schema, authorId as the id and PUT as the method
    const apiURL = setApiURLByIdMethod(schema, authorId, 'PUT');

    const updatedAuthor = await updateAuthorService(apiURL, authorData);
    console.log('updatedAuthor', updatedAuthor);
    res.status(200).json({message: 'Author updated', data: updatedAuthor});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
};

const deleteAuthor = async (req, res) => {
  const authorId = req.params.id;
  try {
    // Define Mockaroo API URL, using authors as the schema, authorId as the id and DELETE as the method
    const apiURL = setApiURLByIdMethod(schema, authorId, 'DELETE');
    
    const authorDeleted = await deleteAuthorService(apiURL, authorId);

    console.log('authorDeleted', authorDeleted);

    res.status(200).send({message: 'Author deleted', data: {id: authorId}});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
};

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};