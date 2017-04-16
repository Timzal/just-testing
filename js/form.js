function formValidation(){
	var	name = document.getElementById("fname").value;
	var	lastName = document.getElementById("flastname").value;
	var	email = document.getElementById("femail").value;
	var emailAfna=email.indexOf("@");  
	var emailDot=email.lastIndexOf(".");  
	var	empty = "";
	var invalid = 0;

		if( isNaN(name)!==true || name==empty){
			document.getElementById("fname").classList.add("error");
			document.getElementById("fname").focus();
			invalid++;
		}
		else{
			document.getElementById("fname").classList.remove("error");
		}
		if(isNaN(lastName)!==true || lastName==empty){
			document.getElementById("flastname").classList.add("error");
			document.getElementById("flastname").focus();
			invalid++;
		}
		else{
			document.getElementById("flastname").classList.remove("error");
		}
		if(isNaN(email)!==true || email==empty){
			document.getElementById("femail").classList.add("error");
			document.getElementById("femail").focus();
			invalid++;
		}
		else{
			document.getElementById("femail").classList.remove("error");
		}
		if (emailAfna<1 || emailDot<emailAfna+2 || emailDot+2>=email.length){  
  		  document.getElementById("femail").classList.add("error");
  		  document.getElementById("femail").focus();
  		}    
		if (invalid > 0){
			return false;
		}
	return false; //da se stran ne refresha			
}


