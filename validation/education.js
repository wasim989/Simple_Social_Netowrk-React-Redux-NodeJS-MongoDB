const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.institution = !isEmpty(data.institution) ? data.institution : "";
  data.qualification = !isEmpty(data.qualification) ? data.qualification : "";
  data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (validator.isEmpty(data.institution)) {
    errors.institution = "institution field is required";
  }

  if (validator.isEmpty(data.qualification)) {
    errors.qualification = "qualification field is required";
  }

  if (validator.isEmpty(data.fieldOfStudy)) {
    errors.fieldOfstudy = "fieldOfstudy field is required";
  }

  if (validator.isEmpty(data.from)) {
    errors.from = "from field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
