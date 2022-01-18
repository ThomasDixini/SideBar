


const DOM = {
    menu: document.querySelector('.menu'),
    button: document.querySelector('button'),

}


function openMenu() {
    DOM.menu.classList.toggle('aberto')
    DOM.button.classList.toggle('aberto')
}