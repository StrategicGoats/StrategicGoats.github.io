function validate_pass(pass){
  var minimum_length = 6;
  var errors = [];
  if(pass.length<minimum_length)
    errors.push("Too short");
  if(pass.match(/[^a-zA-Z0-9]/))
    errors.push("Only alphanumeric chars allowed");
  if(!pass.match(/[a-z]/))
    errors.push("Lower case letter required");
  if(!pass.match(/[A-Z]/))
    errors.push("Upper case letter required");
  if(!pass.match(/[0-9]/))
    errors.push("Number required");
  return errors;
}
