const axios = require('axios');
const config = require('../../config/config.json');

const insertRequests = async (req) => {
  const insertData = req;
  const result = await axios
    .post(`${config.userPath}/register`, insertData)
    .then((response) => response.data)
    .catch((error) => error);
  return result;
};

const getAllRequests = async (req) => {
  const insertData = req;
  const result = await axios
    .post(`${config.userPath}/login`, insertData)
    .then((response) => response.data)
    .catch((error) => error);
  return result;
};



module.exports = {
  insertRequests,
  getAllRequests
};
