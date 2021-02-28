const menu = document.querySelector('.menu')
const liItem1 = document.querySelector('.menu-item1')
const liItem2 = document.querySelector('.menu-item2')
const liItem3 = document.querySelector('.menu-item3')
const liButton = document.querySelector('.menu-button')
const liButtonLink = document.querySelector('.menu-button img')

console.log(liButtonLink.getAttribute('src'))

function handleMenu(){
    liButtonLink.setAttribute('width', '16')
    menu.classList.toggle('menu-active-ul')
    liItem1.classList.toggle('menu-active-item1')
    liItem2.classList.toggle('menu-active-item2')
    liItem3.classList.toggle('menu-active-item3')

    if(liButtonLink.getAttribute('src') === './assets/menu_icon.svg' ){
        liButtonLink.setAttribute('src', './assets/close.svg')
    } else{
        liButtonLink.setAttribute('src', './assets/menu_icon.svg')
    }
}