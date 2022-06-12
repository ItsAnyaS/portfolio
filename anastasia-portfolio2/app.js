const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')
const darkModeBtn = document.querySelector('.navbar__btn')
const body = document.querySelector('body')
const nav = document.querySelector('.navbar')
const navlink = document.getElementsByClassName('navbar__item')
const messageArr = ['Anastasia Sirman'];
var textposition = 0;
const speed = 150;

typewriter = () => {
    document.querySelector('.main__header').innerHTML = messageArr[0].substring(0,textposition) + '<span class="blink">|</span>';
    if (textposition++ != messageArr[0].length){
        setTimeout(typewriter,speed)
    } 
}

window.addEventListener('load', () => {
    typewriter();
})      

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
})

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
    nav.classList.toggle('dark')
    navlink.classList.toggle('dark')
})





