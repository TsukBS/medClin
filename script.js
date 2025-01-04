const menuMobile = document.querySelector('.menu-mobile')
const faBars = document.querySelector('.fa-bars')
const displayX = document.querySelector('.display-x')
const body = document.querySelector('.body')

function removeBtnBars(){
    faBars.classList.add('desactive-btn-bar')
}

function activeMenuMobile (){
    menuMobile.classList.add('menu-mobile-active')
}

function dasactiveMenuMobile(){
    menuMobile.classList.remove('menu-mobile-active')
    faBars.classList.remove('desactive-btn-bar')
}


faBars.addEventListener('click', removeBtnBars)
faBars.addEventListener('click', activeMenuMobile)
displayX.addEventListener('click', dasactiveMenuMobile)
body.addEventListener('click', dasactiveMenuMobile)