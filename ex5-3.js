function validator(password) {
    if (password.length >= 7) {
      return "Strong";
    } else {
      return "Weak";
    }
  }
  
  let validator2 = (password) => (password.length >= 7 ? "Strong" : "Weak");
  
  let validator3 = (password) => password.length >= 7 && "Strong";
  
  let validator4 = (password) => password.length < 7 && "Weak";
  
  function advValidator(password) {
    let isUpper = /[A-Z]/.test(password);
  
    return password.length >= 7 && isUpper == true
      ? "Very Strong"
      : password.length >= 7
      ? "Strong"
      : "Weak";
  }