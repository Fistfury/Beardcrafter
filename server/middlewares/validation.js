const Joi = require("joi");

const registrationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "any.required": "Password is required",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
});

const validateRegistration = (req, res, next) => {
  const { error } = registrationSchema.validate(req.body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.status = 400;
    return next(err);
  }
  next();
};

const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.status = 400;
    return next(err);
  }
  next();
};

module.exports = { validateRegistration, validateLogin }
