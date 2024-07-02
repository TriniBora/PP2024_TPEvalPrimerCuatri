const {setApiURL, setApiURLById, setApiURLMethod, setApiURLByIdMethod} = require('../util/apiUrl.util');
const {getBorrowingsService, getBorrowingByIdService, createBorrowingService, updateBorrowingService, deleteBorrowingService} = require('../services/borrowings.service');
const {getUserByIdService} = require('../services/users.service');
const {getBookByIdService} = require('../services/books.service');

const schema = 'borrowings';

const getBorrowings = async (req, res) => {
  try {
    // Define Mockaroo API URL, using borrowings.json as the schema
    const apiURL = setApiURL(schema);
    const borrowings = await getBorrowingsService(apiURL);
    
    //console.log('borrowings', borrowings)
    
    res.status(200).send({data: borrowings});
  } catch (error) {
    console.error(error);
    res.status(500).send({error: error.message});
  }
};

const getBorrowingById = async (req, res) => {
  const borrowingId = req.params.id;
  try {
    // Define Mockaroo API URL, using borrowings as the schema and borrowingId as the id of the borrowing to retrieve
    const apiURLById = setApiURLById(schema, borrowingId);
    const borrowing = await getBorrowingByIdService(apiURLById);
    //console.log('borrowing', borrowing)

    // Get user data and book data related to borrowing
    if( borrowing) {
      // Get user data for user_id
      const userId = borrowing.user_id;
      try {
        const apiURLUserById = setApiURLById('users', userId);
        const user = await getUserByIdService(apiURLUserById);
        borrowing.user = user;
        delete borrowing.user_id;
      } catch (error) {
        throw error;
      };
      

      // Get book data for book_id
      const bookId = borrowing.book_id;
      try {
        const apiURLBookById = setApiURLById('books', bookId);
        const book = await getBookByIdService(apiURLBookById);
        borrowing.book = book;
        delete borrowing.book_id;
      } catch (error) {
        throw error;
      };
      
    };
    res.status(200).send({data: borrowing});
  } catch (error) {
    console.error(error);
    res.status(500).send({error: error.message});
  }

};

const createBorrowing = async (req, res) => {
  const borrowingData = req.body;
  try {
    // Define Mockaroo API URL, using borrowings as the schema and POST as the method
    const apiURL = setApiURLMethod(schema, 'POST');

    const borrowing = await createBorrowingService(apiURL, borrowingData);

    res.status(201).send({message: 'Borrowing created', data:borrowing});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }

};

const updateBorrowing = async (req, res) => {
  const borrowingId = req.params.id;
  const borrowingData = req.body;
  try {
    // Define Mockaroo API URL, using borrowings as the schema, borrowingId as the id and PUT as the method
    const apiURL = setApiURLByIdMethod(schema, borrowingId, 'PUT');

    const updatedBorrowing = await updateBorrowingService(apiURL, borrowingData);
    //console.log('updatedBorrowing', updatedBorrowing);
    res.status(200).json({message: 'Borrowing updated', data: updatedBorrowing});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
};

const deleteBorrowing = async (req, res) => {
  const borrowingId = req.params.id;
  try {
    // Define Mockaroo API URL, using borrowings as the schema, borrowingId as the id and DELETE as the method
    const apiURL = setApiURLByIdMethod(schema, borrowingId, 'DELETE');
    
    const borrowingDeleted = await deleteBorrowingService(apiURL, borrowingId);

    //console.log('borrowingDeleted', borrowingDeleted);

    res.status(200).send({message: 'Borrowing deleted', data: {id: borrowingId}});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
};

module.exports = {
  getBorrowings,
  getBorrowingById,
  createBorrowing,
  updateBorrowing,
  deleteBorrowing,
};