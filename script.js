let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// type js
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Web Developer', 'Home Tutor'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop:true
});