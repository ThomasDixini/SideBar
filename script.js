

let user = [];

const api = fetch('https://api.github.com/users/ThomasDixini').then(response => response.json()).then(json => user.push(json.avatar_url,json.name))
console.log(user)

const DOM = {
    menu: document.querySelector('.menu'),
    button: document.querySelector('button'),
    icons: document.querySelectorAll('.icon'),
    paragraphs: document.querySelectorAll('p')
}

DOM.button.append(user[1])

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

