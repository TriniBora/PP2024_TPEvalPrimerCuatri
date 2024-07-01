// Mockaroo API URL global constants
const apiURL = process.env.MOCKAROO_API_URL;
const apiKey = process.env.MOCKAROO_API_KEY;

// Return the Mockaroo API URL
const setApiURL = (schema) => {
  return `${apiURL}/${schema}.json?key=${apiKey}`;
};

const setApiURLById = (schema, id) => {
  return `${apiURL}/${schema}/${id}.json?key=${apiKey}`;
};

const setApiURLMethod = (schema, method) => {
  return `${apiURL}/${schema}.json?key=${apiKey}__method=${method}`;
};

module.exports = {
  setApiURL,
  setApiURLById,
  setApiURLMethod
};