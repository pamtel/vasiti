const validate = (person) => {
    let errors = {};
    if (!person.firstName.trim()) {
      errors.firstName = "Name is required";
    } 
  
    return errors;
  };
  
  export default validate;