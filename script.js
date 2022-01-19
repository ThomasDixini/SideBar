


const DOM = {
    menu: document.querySelector('.menu'),
    button: document.querySelector('button'),
    icons: document.querySelectorAll('.icon')

}


function openMenu() {
    DOM.menu.classList.toggle('aberto')
    DOM.button.classList.toggle('aberto')
    DOM.icons.forEach(icon => icon.classList.toggle('aberto'))
}

function selectIcon() {

}