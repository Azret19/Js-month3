//MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()

const TimerModalTenSeconds = setTimeout(openModal, 10000)

function showModal() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal()
        window.removeEventListener('scroll', showModal)
    }
}
window.addEventListener('scroll', showModal)



// window.addEventListener('scroll', (e) => {
//     let scrollEnd = window.scrollY
//     console.log(scrollEnd)
//
//     if (e.target === modal) {
//
//     }
// })



// modal.removeEventListener('scrollTop',() => {
//
// })
