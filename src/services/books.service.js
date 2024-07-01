const getBooksService = async (apiURL) => {
  console.log('apiURL', apiURL)
  try {
    const books = await fetch(apiURL).then((response) => response.json()).then((data) => data).catch((err) => { throw err });

    return books;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getBookByIdService = async (apiURL) => {
  console.log('apiURL', apiURL)
  try {
    const book = await fetch(apiURL).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return book;
  } catch (error) {
    throw error;
  }
};

const createBookService = async (apiURL, bookData) => {
  console.log('apiURL', apiURL)
  try {
    const book = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookData)
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return book;
  } catch (error) {
    throw error;
  }
};

const updateBookService = async (apiURL, bookData) => {
  console.log('apiURL', apiURL)
  try {
    const updatedBook = await fetch(apiURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookData)
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return updatedBook;
  } catch (error) {
    throw error;
  }
};

const deleteBookService = async (apiURL, bookId) => {
  console.log('apiURL', apiURL)
  try {
    const bookDeleted = await fetch(apiURL, {
      method: 'DELETE'
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return bookDeleted;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getBooksService,
  getBookByIdService,
  createBookService,
  updateBookService,
  deleteBookService
}