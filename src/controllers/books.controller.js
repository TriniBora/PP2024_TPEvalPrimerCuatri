const getBooks = async (req, res) => {
  res.send('GET /books');
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