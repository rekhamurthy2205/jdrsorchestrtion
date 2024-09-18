
const userService = require('../services/sourceService/user.service');
const responseStructure = require('../services/staticService/responseStructure');
const jwt = require('jsonwebtoken');


const registerRequests = async (req, res) => {
  let responseMessage;
  try {
    const insertdata = await userService.insertRequests({
      dbName: 'user',
      insertData: req.body.insertObject
    });
    (insertdata.responseObj.responseCode === 200
      ? async () => {
        responseMessage = responseStructure.successResponse({
          message: 'Register successfully',
        });
        res.send(responseMessage);
      }
      : () => {
        responseMessage = responseStructure.errorResponse('email already exsist');
        res.send(responseMessage);
      })();
  } catch (error) {
    responseMessage = responseStructure.errorResponse('Error Please try again');
    res.send(responseMessage);
  }
};

const LoginRequests = async (req, res) => {
  let responseMessage;
  try {
    const insertdata = await userService.getAllRequests({
      dbName: 'user',
      insertData: req.body.insertObject
    });
    (insertdata.responseObj.responseCode === 200
      ? async () => {
     
        var user = insertdata.responseObj.responseDataParams.userId
        
        const token = jwt.sign({ id: user }, 'your_jwt_secret', { expiresIn: '1h' });
        if(token){
          const responseMessage = responseStructure.successResponse('Login successfully');
          res.status(200).send({ ...responseMessage, token });

      }else{
          const responseMessage = responseStructure.errorResponse('Error In token generation');
          return res.status(400).send(responseMessage);  
      }
       
      }
      : () => {
        responseMessage = responseStructure.errorResponse('Error In Login');
        res.send(responseMessage);
      })();
  } catch (error) {
    responseMessage = responseStructure.errorResponse('Error Please try again');
    res.send(responseMessage);
  }
};





module.exports = {
  registerRequests,
  LoginRequests
};
