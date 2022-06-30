const email = document.getElementById("email");
const password = document.getElementsByClassName("pass");
const form = document.querySelector("#form");

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', function (e) {
  e.preventDefault();

if(email.value === ''){
  email.classList.add('error');
  alert('Email is required');
}else if (!isValidEmail) {
  alert('Provide a valid email address');
}

if(password.value === ''){
  password.classList.add('error');
  alert('Password is required');
} 

else{
  const prePayload = new FormData(form);
  const payload = new URLSearchParams(prePayload);
  console.log([...payload]);
  fetch("https://todo22a.herokuapp.com/api/v1/user/login", {
      method: 'POST',
      body: payload,
      redirect: 'follow'
  })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log('err', err));
  setTimeout(openNew, 3000)
  function openNew() {
      if(email.value === '' || password.value === '' ){
          return false
      }else{
        alert("Welcome!");
        window.open("../skip/index.html", target = "_self")
      }

  }
}


});


// const prePayload = new FormData(form);
// const payload = new URLSearchParams(prePayload);
// console.log([...payload]);
// fetch("https://todo22a.herokuapp.com/api/v1/user/login", {
//     method: 'POST',
//     body: payload,
//     redirect: 'follow'
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('err', err));
// setTimeout(openNew, 3000)
// function openNew() {
// if(username.value === '' || email.value === '' || password.value === '' ){
//   return false
// }else{
// alert("SUCCESSFUL, Kindly Login on Next Page!");
// window.open("../SIGN_UP/index.html", target = "_self")
// }

// var raw = "{\r\n    \r\n	\"email\": \"adegbite@gmail.com\",\r\n	\"password\": \"adeola\"\r\n    \r\n}";

// var requestOptions = {
//   method: 'POST',
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://todo22a.herokuapp.com/api/v1/user/login", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));