const getBorrowingsService = async (apiURL) => {
  console.log('apiURL', apiURL)
  try {
    const borrowings = await fetch(apiURL).then((response) => response.json()).then((data) => data).catch((err) => { throw err });

    return borrowings;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getBorrowingByIdService = async (apiURL) => {
  console.log('apiURL', apiURL)
  try {
    const borrowing = await fetch(apiURL).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return borrowing;
  } catch (error) {
    throw error;
  }
};

const createBorrowingService = async (apiURL, borrowingData) => {
  console.log('apiURL', apiURL)
  try {
    const borrowing = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(borrowingData)
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return borrowing;
  } catch (error) {
    throw error;
  }
};

const updateBorrowingService = async (apiURL, borrowingData) => {
  console.log('apiURL', apiURL)
  try {
    const updatedBorrowing = await fetch(apiURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(borrowingData)
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return updatedBorrowing;
  } catch (error) {
    throw error;
  }
};

const deleteBorrowingService = async (apiURL, borrowingId) => {
  console.log('apiURL', apiURL)
  try {
    const borrowingDeleted = await fetch(apiURL, {
      method: 'DELETE'
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return borrowingDeleted;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getBorrowingsService,
  getBorrowingByIdService,
  createBorrowingService,
  updateBorrowingService,
  deleteBorrowingService
}