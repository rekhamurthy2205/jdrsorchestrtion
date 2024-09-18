const router = require('express').Router();
const validation = require('../services/validation/user/user.validation');
const adminController = require('../controller/admin.controller')
const verifySuperAdminToken = require('../middleware/token_validation/admin')


router.post('/createadmin',verifySuperAdminToken.verifyAdminToken, validation.insertData, adminController.createAdmin);



module.exports = router;
