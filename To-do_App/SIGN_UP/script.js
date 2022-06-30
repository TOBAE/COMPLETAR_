const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementsByClassName("pass");
const form = document.querySelector("#form");

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', function (e) {
  e.preventDefault();


if(username.value === ''){
  username.classList.add('error');
  alert('Name is required');
}
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
  fetch('https://todo22a.herokuapp.com/api/v1/user/register', {
      method: 'POST',
      body: payload,
      redirect: 'follow'
  })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log('err', err));
  setTimeout(openNew, 3000)
  function openNew() {
      if(username.value === '' || email.value === '' || password.value === '' ){
          return false
      }else{
        alert("SUCCESSFUL, Kindly Login on Next Page!");
        window.open("../sign_in/index.html", target = "_self")
      }

  }
}


});
