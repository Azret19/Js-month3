//DOM - document object model

// console.log(document.body)

// document.body.style.background = 'red'

// const buttons = document.getElementsByClassName('btn')
// const button = document.getElementById('btn1')
// const buttons = document.getElementsByTagName('button')


// buttons[0].style.background = 'red'

// add() remove() contains()

// console.dir(buttons[0].classList)

// buttons[0].classList.add('red')
// buttons[0].classList.remove('red')


// const logger = () => console.log('click')
//
// buttons[0].onclick = logger
//
// const buttons = document.querySelectorAll('button')
// buttons.forEach(button => {
//     button.onclick = (event) => {
//         if (event.target.classList.contains('green')) {
//             event.target.classList.remove('green')
//         } else {
//             event.target.classList.add('green')
//         }
//     }
// })

// const newButton = document.createElement('button')
// wrapper.append(newButton)


// Делегирование событий

// const buttons = document.querySelectorAll('button')
// const wrapper = document.querySelector('.btn-block')
//
// wrapper.addEventListener('click', (event) => {
//     const element = event.target
//     if (element.tagName.toLowerCase() === 'button') {
//         element.addEventListener('click', (e) => {
//             if (e.target.classList.contains('red')) {
//                 e.target.classList.remove('red')
//             } else {
//                 e.target.classList.add('red')
//             }
//         })
//     }
// })