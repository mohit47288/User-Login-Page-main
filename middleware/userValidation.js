const Joi = require('joi');

const userValidationSchema = Joi.object({
  firstName: Joi.string().min(1).max(50).required().messages({
    'string.empty': 'First name is required',
    'string.min': 'First name must be at least 1 character',
    'string.max': 'First name cannot exceed 50 characters',
  }),
  lastName: Joi.string().min(1).max(50).required().messages({
    'string.empty': 'Last name is required',
    'string.min': 'Last name must be at least 1 character',
    'string.max': 'Last name cannot exceed 50 characters',
  }),
  mobile: Joi.string().pattern(/^\d{10}$/).required().messages({
    'string.empty': 'Mobile number is required',
    'string.pattern.base': 'Mobile number must be 10 digits long',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email address',
    'string.empty': 'Email is required',
  }),
  street: Joi.string().min(1).max(100).required().messages({
    'string.empty': 'Street address is required',
    'string.min': 'Street address must be at least 1 character',
    'string.max': 'Street address cannot exceed 100 characters',
  }),
  city: Joi.string().min(1).max(50).required().messages({
    'string.empty': 'City is required',
    'string.min': 'City must be at least 1 character',
    'string.max': 'City cannot exceed 50 characters',
  }),
  state: Joi.string().min(1).max(50).required().messages({
    'string.empty': 'State is required',
    'string.min': 'State must be at least 1 character',
    'string.max': 'State cannot exceed 50 characters',
  }),
  country: Joi.string().min(1).max(50).required().messages({
    'string.empty': 'Country is required',
    'string.min': 'Country must be at least 1 character',
    'string.max': 'Country cannot exceed 50 characters',
  }),
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    'string.empty': 'Username is required',
    'string.alphanum': 'Username must be alphanumeric',
    'string.min': 'Username must be at least 3 characters',
    'string.max': 'Username cannot exceed 30 characters',
  }),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.pattern.base': 'Password must be at least 6 characters, include one uppercase letter, one lowercase letter, one number, and one special character',
    })
});

module.exports = userValidationSchema;
