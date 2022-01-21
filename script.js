


const DOM = {
    menu: document.querySelector('.menu'),
    button: document.querySelector('button'),
    icons: document.querySelectorAll('.icon'),
    paragraphs: document.querySelectorAll('p')
}


function openMenu() {
    DOM.menu.classList.toggle('aberto')
    DOM.button.classList.toggle('aberto')
    DOM.icons.forEach(icon =>  {

        icon.classList.toggle('aberto')

    })
    
    

    DOM.paragraphs.forEach(paragraph => {

        let hidden = "hidden"

        if (paragraph.hasAttribute(hidden) == true){
            paragraph.removeAttribute(hidden)
        } else {
            paragraph.setAttribute(hidden, true)
        }

        


    })

    
}

function selectItem() {
    
    DOM.icons.forEach(icon => {
        if(icon.id != 1 ){
            icon.addEventListener('click',() => {
                icon.classList.toggle('selected')
                    if(icon.className.includes('aberto')){
                    } else {
                    openMenu();
                    }
                })
        }
    })
}

selectItem();

