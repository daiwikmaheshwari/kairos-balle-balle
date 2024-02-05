const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
var registration=document.querySelector(".Registration");
var login=document.querySelector(".form-box");



registerlink.addEventListener('click',()=>{

    registration.style.display = (registration.style.display === 'block') ? 'none' : 'block';
   
})

loginlink.addEventListener('click',()=>{
    login.style.display = (login.style.display === 'block') ? 'none' : 'block';

    
   
})


    