function validateForm() {
	var email = document.forms["myForm"]["email"].value;
	var name = document.forms["myForm"]["name"].value;
	var msg = document.forms["myForm"]["msg"].value;
	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	if (msg==null || msg=="" || name==null || name=="") {
		alert("OOps ... First/Message must be filled out");
		return false;
	}
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email=email.length) {
		alert("OOps ...you entered an invalid email");
		return false;
	}
}
