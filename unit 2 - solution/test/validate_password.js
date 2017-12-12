/* global expect, validate_pass */

describe('Password Checker', function() {
  it('returns an empty error list for a valid password.',function(){
    var errors = validate_pass('Password1');
    expect(errors).to.be.empty;
  });
  it('returns an error list containing "Too short" for ' +
  'passwords shorter than 6 characters.',function(){
    var errors = validate_pass('Pass1');
    expect(errors).to.contain('Too short');
  });
  it('returns an error list containing "Only alphanumeric ' +
  'chars allowed" for passwords containing non-alphanumeric ' +
  'characters.',function(){
    var errors = validate_pass('pw!');
    expect(errors).to.contain('Only alphanumeric chars allowed');
  });
  it('returns an error list containing "Lower case letter ' +
  'required" for passwords without a lower case letter.',
  function(){
    var errors = validate_pass('PASSWORD1');
    expect(errors).to.contain('Lower case letter required');
  });
  it('returns an error list containing "Upper case letter ' +
  'required" for passwords without a upper case letter.',
  function(){
    var errors = validate_pass('password!');
    expect(errors).to.contain('Upper case letter required');
  });
  it('returns an error list containing "Number required" for ' +
  'passwords without a number.',
  function(){
    var errors = validate_pass('password');
    expect(errors).to.contain('Number required');
  });
  it('returns an error list containing containing all errors ' +
  'if multiple errors are present in the same password.',function(){
    var errors = validate_pass('PW1');
    var expected_errors = [
      'Too short',
      'Lower case letter required'
    ];
    expect(errors).to.contain.members(expected_errors);
    expect(errors.length).to.equal(expected_errors.length);

    errors = validate_pass('ppppppp!');
    expected_errors = [
      'Only alphanumeric chars allowed',
      'Upper case letter required',
      'Number required'
    ];
    expect(errors).to.contain.members(expected_errors);
    expect(errors.length).to.equal(expected_errors.length);
  });
});
