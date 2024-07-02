const getAuthorsService = async (apiURL) => {
  console.log('apiURL', apiURL)
  try {
    const authors = await fetch(apiURL).then((response) => response.json()).then((data) => data).catch((err) => { throw err });

    return authors;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAuthorByIdService = async (apiURL) => {
  console.log('apiURL', apiURL)
  try {
    const author = await fetch(apiURL).then((response) => response.json()).then((data) => data).catch((err) => { throw err });

    return author;
  } catch (error) {
    throw error;
  }
};

const createAuthorService = async (apiURL, authorData) => {
  console.log('apiURL', apiURL)
  try {
    const author = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authorData)
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return author;
  } catch (error) {
    throw error;
  }
};

const updateAuthorService = async (apiURL, authorData) => {
  console.log('apiURL', apiURL)
  try {
    const updatedAuthor = await fetch(apiURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authorData)
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return updatedAuthor;
  } catch (error) {
    throw error;
  }
};

const deleteAuthorService = async (apiURL, authorId) => {
  console.log('apiURL', apiURL)
  try {
    const authorDeleted = await fetch(apiURL, {
      method: 'DELETE'
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return authorDeleted;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAuthorsService,
  getAuthorByIdService,
  createAuthorService,
  updateAuthorService,
  deleteAuthorService
}