const email = document.getElementById("email");
const password = document.getElementsByClassName("pass");
const form = document.getElementsByClassName("form");
const button = document.getElementById("btn");
const error = document.getElementById("error");
const error_2 = document.getElementsByClassName("password")


function Validate() {
    if (email.value.trim() == "") {
       error.style.display = "block" 
    }else{
        error.style.display = "none"
    }

    if (password.value.trim() === "") {
      return  alert('its working')
     }else{
         error_2.style.visibility = "hidden"
     }
}


var raw = "{\r\n    \r\n	\"email\": \"adegbite@gmail.com\",\r\n	\"password\": \"adeola\"\r\n    \r\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://todo22a.herokuapp.com/api/v1/user/login", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));