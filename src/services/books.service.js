const getBooksService = async (apiURL) => {
  console.log('apiURL', apiURL)
  try {
    const books = await fetch(apiURL).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    //console.log('books', books)
    
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
    //const book = await fetch(`https://my.api.mockaroo.com/${schema}/${bookId}.json?key=ab9eef70`).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    //console.log('book', book)
    
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
    //console.log('book', book)
    
    return book;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getBooksService,
  getBookByIdService,
  createBookService
}