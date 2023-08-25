// PHONE CHECKER

//DOM - document object model
const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')


const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

//TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()
let index = 0

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (item === event.target) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabs.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}

autoSlider(index)

//CONVERTER


const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const convert = (element, target) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            target.forEach( e =>{
                if (e === som) {
                    e.value = (element.value * response[element.id]).toFixed(2)
                } else {
                    e.value = ((element.value * response[element.id]) / response[e.id]).toFixed(2)
                }
            })
            if (element.value === '') {
                target.forEach(e => e.value = '')
            }

            element.value === '' && (target.forEach(e => e.value = ''))
        }
    }
}
convert(som,[usd,eur])
convert(usd,[som,eur])
convert(eur,[som,usd])











// if (target2 === 'som') {
//     e.value = (elem.value / response[e.id]).toFixed(2)
// }
// else

// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')
// const eur = document.querySelector('#eur')
//
//
// const converter = (element, target, target2, isTrue) => {
//     element.oninput= () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "../data/converter.json")
//         request.setRequestHeader("Content-type", "application/json")
//         request.send()
//         request.onload = () => {
//         const response = JSON.parse(request.response)
//             if (isTrue) {
//                 target.value = (element.value / response.usd).toFixed(2)
//                 target2.value = (element.value / response.eur).toFixed(2)
//                 //Конвертер сома
//             }
//             else if (isTrue) {
//                 target.value = (element.value * response.eur).toFixed(2)
//                 target2.value = ((element.value * response.eur) / response.usd).toFixed(2)
//                 //Конвертер евро
//             }
//             else {
//                 target.value = (element.value * response.usd).toFixed(2)
//                 target2.value = ((element.value * response.usd) / response.eur).toFixed(2)
//                 //Конвертер доллара
//             }
//                 element.value === '' && (target.value = '')
//                 element.value === '' && (target2.value = '')
//         }
//     }
// }
// converter(som, usd, eur,true)
// converter(eur, som, usd,false)
// converter(usd, som, eur,false)















