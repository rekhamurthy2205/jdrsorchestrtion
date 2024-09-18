const Joi = require('joi');

const registerJoi = Joi.object({
  insertObject: Joi.object({
    username:Joi.string().required(),
    email: Joi.string().required(),
    password:Joi.string().required(),
    role:Joi.string().required(),
  }),
});

const loginJoi = Joi.object({
  insertObject: Joi.object({
    email: Joi.string().required(),
    password:Joi.string().required()
  }),
});



module.exports = {
  registerJoi,
  loginJoi
};
