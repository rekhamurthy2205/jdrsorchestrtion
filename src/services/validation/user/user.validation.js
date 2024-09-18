const {
    registerJoi,
    loginJoi
    
  } = require('../../../middleware/validation/user/user.joi');
  const responseStructure = require('../../staticService/responseStructure');
  
  const insertData = async (request, response, next) => {
    try {
      await registerJoi.validateAsync(request.body);
      next();
    } catch (err) {
      const responseMessage = await responseStructure.validationResponse(err);
      response.send(responseMessage);
    }
  };

  const loginData = async (request, response, next) => {
    try {
      await loginJoi.validateAsync(request.body);
      next();
    } catch (err) {
      const responseMessage = await responseStructure.validationResponse(err);
      response.send(responseMessage);
    }
  };
  module.exports = {
    insertData,
    loginData
  };
  