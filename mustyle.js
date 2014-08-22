function validateFormOnSubmit(theForm) {
var reason = "";

  reason += validateUsername(theForm.name);
  reason += validateEmail(theForm.email);
  reason += validateEmpty(theForm.comment);
      
  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }

  //alert("Form submitted!!!\n");
  return false;
}

function validateEmpty(fld) {
    var error = "";
 
    if (fld.value.length == 0) {
        fld.style.background = 'red'; 
        error = "The required field has not been filled in.\n"
    } else {
        fld.style.background = 'White';
    }
    return error;  
}

function validateUsername(fld) {
    var error = "";
    var illegalChars = /\W/;
 
    if (fld.value == "") {
        fld.style.background = 'red'; 
        error = "You didn't enter your name.\n";
    } else if ((fld.value.length < 5) || (fld.value.length > 15)) {
        fld.style.background = 'red'; 
        error = "may you enter full name please?\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'red'; 
        error = "The username contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
} 
function trim(s)
{
  return s.replace(/^\s+|\s+$/, '');
}
function validateEmail(fld) {
    var error="";
    var tfld = trim(fld.value);                        
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
   
    if (fld.value == "") {
        fld.style.background = 'red';
        error = "You didn't enter an email address.\n";
    } else if (!emailFilter.test(tfld)) {              
        fld.style.background = 'red';
        error = "Please enter a valid email address.\n";
    } else if (fld.value.match(illegalChars)) {
        fld.style.background = 'red';
        error = "The email address contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}
//referrences http://webcheatsheet.com
