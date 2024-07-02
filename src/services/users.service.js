const getUsersService = async (apiURL) => {
  console.log('apiURL', apiURL)
  try {
    const users = await fetch(apiURL).then((response) => response.json()).then((data) => data).catch((err) => { throw err });

    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUserByIdService = async (apiURL) => {
  console.log('apiURL', apiURL)
  try {
    const user = await fetch(apiURL).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return user;
  } catch (error) {
    throw error;
  }
};

const createUserService = async (apiURL, userData) => {
  console.log('apiURL', apiURL)
  try {
    const user = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUserService = async (apiURL, userData) => {
  console.log('apiURL', apiURL)
  try {
    const updatedUser = await fetch(apiURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteUserService = async (apiURL, userId) => {
  console.log('apiURL', apiURL)
  try {
    const userDeleted = await fetch(apiURL, {
      method: 'DELETE'
    }).then((response) => response.json()).then((data) => data).catch((err) => { throw err });
    
    return userDeleted;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsersService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService
}