// Mockaroo API URL global constants
const apiURL = process.env.MOCKAROO_API_URL;
const apiKey = process.env.MOCKAROO_API_KEY;

// Return the Mockaroo API URL
const setApiURL = (schema) => {
  return `${apiURL}/${schema}?key=${apiKey}`;
};

module.exports = {
  setApiURL,
};