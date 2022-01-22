


fetch('https://api.github.com/users/ThomasDixini')                                   //Pega dados da API do GitHube, no caso o nome do meu User e Foto //
.then(response => response.json())
.then(data => {
                const img = document.querySelector('#avatar')
                img.setAttribute('src',data.avatar_url)
                })



const DOM = {                                           // DOM, pega os elementos do meu HTML  //             
    menu: document.querySelector('.menu'),
    button: document.querySelector('button'),
    img_avatar: document.querySelector('#avatar'),
    icons: document.querySelectorAll('.icon'),
    paragraphs: document.querySelectorAll('p')
}



function openMenu() {                                   // Função que abre o menu //
    DOM.menu.classList.toggle('aberto')
    DOM.button.classList.toggle('aberto')               // → Muda as classes dos meus elementos do menu para aberto, fazendo assim abrir o menu
    DOM.icons.forEach(icon =>  {
        icon.classList.toggle('aberto')
    })
    
    

    DOM.paragraphs.forEach(paragraph => {                // → Insere o texto de cada ícone quando o menu for aberto

        let hidden = "hidden"

        if (paragraph.hasAttribute(hidden) == true){
            paragraph.removeAttribute(hidden)
            DOM.img_avatar.removeAttribute(hidden)
        } else {
            paragraph.setAttribute(hidden, true)
            DOM.img_avatar.setAttribute(hidden, true)
        }

        


    })

    
}

function selectItem() {                             // Função que deixa meu ícone marcado //
    
    DOM.icons.forEach(icon => {                                         // Para cada icone do meu array de icones[], 
        if(icon.id != 1 ){                                              // Caso o id do meu ícone for != 1(no caso para não marcar meu ícone de abrir o menu)
            icon.addEventListener('click',() => {                       // Adicione um evento de click em cada ícone
                icon.classList.toggle('selected')                       // Que alterna a classe do mesmo de selected, para sem selected e vice-versa
                    if(icon.className.includes('aberto')){              // Se meu icone já conter a classe 'aberto', não faz nada
                    } else {                                            // Mas se já, ativa minha função de Abrir Menu
                    openMenu();
                    }
                })
        }
    })
}



selectItem();                                                           // Ativa a função de selecionar ícone

