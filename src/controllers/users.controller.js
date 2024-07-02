const {setApiURL, setApiURLById, setApiURLMethod, setApiURLByIdMethod} = require('../util/apiUrl.util');
const {getUsersService, getUserByIdService, createUserService, updateUserService, deleteUserService} = require('../services/users.service');

const schema = 'users';

const getUsers = async (req, res) => {
  try {
    // Define Mockaroo API URL, using users.json as the schema
    const apiURL = setApiURL(schema);
    const users = await getUsersService(apiURL);
    
    console.log('users', users)
    
    res.status(200).send({data: users});
  } catch (error) {
    console.error(error);
    res.status(500).send({error: error.message});
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    // Define Mockaroo API URL, using users as the schema and userId as the id of the user to retrieve
    const apiURLById = setApiURLById(schema, userId);
    const user = await getUserByIdService(apiURLById);
    console.log('user', user)
    res.status(200).send({data: user});
  } catch (error) {
    console.error(error);
    res.status(500).send({error: error.message});
  }

};

const createUser = async (req, res) => {
  const userData = req.body;
  try {
    // Define Mockaroo API URL, using users as the schema and POST as the method
    const apiURL = setApiURLMethod(schema, 'POST');

    const user = await createUserService(apiURL, userData);

    res.status(201).send({message: 'User created', data:user});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }

};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  try {
    // Define Mockaroo API URL, using users as the schema, userId as the id and PUT as the method
    const apiURL = setApiURLByIdMethod(schema, userId, 'PUT');

    const updatedUser = await updateUserService(apiURL, userData);
    console.log('updatedUser', updatedUser);
    res.status(200).json({message: 'User updated', data: updatedUser});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    // Define Mockaroo API URL, using users as the schema, userId as the id and DELETE as the method
    const apiURL = setApiURLByIdMethod(schema, userId, 'DELETE');
    
    const userDeleted = await deleteUserService(apiURL, userId);

    console.log('userDeleted', userDeleted);

    res.status(200).send({message: 'User deleted', data: {id: userId}});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};