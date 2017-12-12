<<<<<<< HEAD
/* global validate_pass */

function get_error_msg(errors){
  var msg = 'The password has the following errors:\n';
  for(var i=0;i<errors.length;i++)
    msg += ' - ' + errors[i] + '\n';
  return msg;
}

window.onload = function(){
  var form = document.getElementById('sign-up');
  var first_pass = form.pass;
  var second_pass = form.confirm_pass;

  var validate_password = function(){
    var errors = validate_pass(first_pass.value);
    if(first_pass.value !== second_pass.value)
      first_pass.setCustomValidity('The two passwords must match.');
    else if(errors.length > 0) {
      var error_msg = get_error_msg(errors);
      first_pass.setCustomValidity(error_msg);
    }
    else
      first_pass.setCustomValidity('');
  };

  first_pass.onchange = validate_password;
  second_pass.onchange = validate_password;
};
=======
/* global validate_pass */

function get_error_msg(errors){
  var msg = 'The password has the following errors:\n';
  for(var i=0;i<errors.length;i++)
    msg += ' - ' + errors[i] + '\n';
  return msg;
}

window.onload = function(){
  var form = document.getElementById('sign-up');
  var first_pass = form.pass;
  var second_pass = form.confirm_pass;

  var validate_password = function(){
    var errors = validate_pass(first_pass.value);
    if(first_pass.value !== second_pass.value)
      first_pass.setCustomValidity('The two passwords must match.');
    else if(errors.length > 0) {
      var error_msg = get_error_msg(errors);
      first_pass.setCustomValidity(error_msg);
    }
    else
      first_pass.setCustomValidity('');
  };

  first_pass.onchange = validate_password;
  second_pass.onchange = validate_password;
};
>>>>>>> master
