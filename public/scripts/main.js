import Modal from './modal.js'

const modal = Modal()


const modalTitle = document.querySelector ('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//pegar todos os botoes da classe check 
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {  //pegar quando o marcar como concluido for clicado, escuta.
    //adicionar escuta
    button.addEventListener("click", handleclick)
})


const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleclick(event, false))  
})

function handleclick(event, check = true) {
    event.preventDefault() //fala para o navegador que a ancora não se comporta como links
    const text = check ? 'Marcar como lida' : 'Excluir' // ? é o if
    const slug = check ? 'Check' : 'delete'
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute("action", `'/room/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
}
