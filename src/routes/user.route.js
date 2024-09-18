const router = require('express').Router();
const validation = require('../services/validation/user/user.validation');
const userController = require('../controller/user.controller')


router.post('/userreg', validation.insertData, userController.registerRequests);

router.post('/userlogin', validation.loginData, userController.LoginRequests);





module.exports = router;
