// signup form js start
//selecting all text element
const username = document.forms['vform'] ['username'];
const email = document.forms['vform'] ['email'];
const password = document.forms['vform'] ['password'];
const password_confirm = document.forms['vform'] ['password_confirm'];

//selecting all error display elements
const name_error = document.querySelector('#name_error');
const email_error = document.querySelector('#email_error');
const password_error = document.querySelector('#password_error');

//sitting all event listeners
username.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);

//validation function
function validate() {
	//validate username
	if (username.value === "") {
		username.style.border = "1px solid #ff8900";
		document.querySelector('#username_div').style.color = "#ff8900";
		name_error.textContent = "Username is required";
		username.focus();
		return false;
	}
	//validate username
	if (username.value.length < 3){
		username.style.border = "1px solid #ff8900";
		document.querySelector('#username_div').style.color = "#ff8900";
		name_error.textContent = "Username must be at last 3 character";
		username.focus();
		return false;
		
	}
	
	//validate email
	if (email.value === ""){
		email.style.border = "1px solid #ff8900";
		document.querySelector('#email_div').style.color = "#ff8900";
		email_error.textContent = "Email is required";
		email.focus();
		return false;
	}
	//validate password
	if (password.value === ""){
		password.style.border = "1px solid #ff8900";
		document.querySelector('#password_div').style.color = "#ff8900";
		password.style.border = "1px solid #ff8900";
		document.querySelector('#pass_confirm_div').style.color = "#ff8900";
		password_confirm.style.border = "1px solid #ff8900";
		password_error.textContent = "Password is required";
		password.focus();
		return false;
	} else if (password.value.length <8) {
		password.style.border = "1px solid #ff8900";
		document.querySelector('#password_div').style.color = "#ff8900";
		password.style.border = "1px solid #ff8900";
		document.querySelector('#pass_confirm_div').style.color = "#ff8900";
		password_confirm.style.border = "1px solid #ff8900";
		password_error.textContent = "Password must be at last 8 character";
		password.focus();
		return false;
	}

		//validate password confirm
		if (password_confirm.value === ""){
			
			document.querySelector('#pass_confirm_div').style.color = "#ff8900";
			password_confirm.style.border = "1px solid #ff8900";
			password_error.textContent = "Password confirm is required";
			password.focus();
			return false;
		}


	//check if the two passwords are match
	if (password.value != password_confirm.value) {
		password.style.border = "1px solid #ff8900";
		document.querySelector('#pass_confirm_div').style.color = "#ff8900";
		document.querySelector('#password_div').style.color = "#ff8900";
		password_confirm.style.border = "1px solid #ff8900";
		password_error.innerHTML = "Passwords do not match";
		return false;
	}
}	
	//event handler function
function nameVerify(){
		if (username.value.length !=3 > 3){
			username.style.border = "1px solid #09ff00";
			document.getElementById('username_div').style.color = "#09ff00";
			name_error.innerHTML = "";
			return true;
		}

}
	
function emailVerify(){
	if (email.value != ""){
		email.style.border = "1px solid #09ff00";
		document.getElementById('email_div').style.color = "#09ff00";
		email_error.innerHTML = "";
		return true;
	}	
}	
	
function passwordVerify(){
	if (password.value != ""){
		password.style.border = "1px solid #09ff00";
		
		document.querySelector('#password_div').style.color = "#09ff00";
		password_error.innerHTML = "";
		return true;
	}
	if (password.value === password_confirm.value){
		// password.style.border = "1px solid #09ff00";
		// document.getElementById('pass_confirm_div').style.color = "#09ff00";
		// document.querySelector('#password_div').style.color = "#09ff00";
		// password_confirm.style.border = "1px solid #09ff00";
		password_error.innerHTML = "Password matched";
		return true;
	}	
}	
// signup js end


