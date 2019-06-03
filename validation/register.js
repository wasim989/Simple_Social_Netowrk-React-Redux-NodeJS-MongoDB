const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "name must be between 2 and 30 characters";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "name field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "email field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "email must be valid";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "password is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 20 })) {
    errors.password = "password must be between 6 and 20 characters in length";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "confirm password is required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "passwords must both match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
