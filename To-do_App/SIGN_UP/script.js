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
}

var raw = 'https://todo22a.herokuapp.com/api/v1/user/register'


var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://todo22a.herokuapp.com/api/v1/user/register", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));