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

autoSlider()

//CONVERTER

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const converter = `../data/converter.json`
const convert = async (element, target) => {
    try{
        const response = await fetch(converter)
        const data = await response.json()
        element.oninput = () => {
            target.forEach( e =>{
                if (e === som) {
                    e.value = (element.value * data[element.id]).toFixed(2)
                } else {
                    e.value = ((element.value * data[element.id]) / data[e.id]).toFixed(2)
                }
            })
            if (element.value === '') {
                target.forEach(e => e.value = '')
            }

            element.value === '' && (target.forEach(e => e.value = ''))
        }
    } catch (e) {
        console.error(e, 'ERROR')
    }

}
convert(som,[usd,eur])
convert(usd,[som,eur])
convert(eur,[som,usd])


const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 1

btnNext.onclick = () => {
    count++
    if (count <= 200){

    }else {
        count = 1
    }
    fetchData()
}

const fetchData = async () => {
    try {
        const placeholder = `https://jsonplaceholder.typicode.com/todos/${count}`
        const response = await fetch(placeholder)
        const data = await response.json()
        card.innerHTML = `
        <p>${data.title}<p>
        <p style="color:${data.completed ? 'green' : 'red'}">${data.completed}<p>
        <span>${data.id}<span>
        `
    } catch (e) {
        console.error(e, 'ERROR')
    }
}
fetchData()

btnPrev.onclick = () => {
    count--
    if (count < 1){
        count = 200
    }
    fetchData()
}
const postsUrl = `https://jsonplaceholder.typicode.com/posts`
const postData = async () => {
    try{
        const response = await fetch(postsUrl)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e, 'ERROR')
    }
}
postData()

//WEATHER

const cityName = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const apiKey = 'e417df62e04d3b1b111abeab19cea714'
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'

cityName.oninput = async (event) => {
    try{
        const response = await fetch(`${baseUrl}?q=${event.target.value}&appid=${apiKey}`)
        const data = await response.json()
            city.innerHTML = data?.name ? data.name : 'Город не найден...'
            temp.innerHTML = data?.main?.temp ? Math.round(data.main.temp - 273) + '&deg;C' : '...'
    } catch (e) {
        console.error(e, 'ERROR')
    }
}



// const citySearch = () => {
//     cityName.oninput = () => {
//         fetch(`${baseUrl}?q=${event.target.value}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 city.innerHTML = data?.name ? data.name : 'Город не найден...'
//                 temp.innerHTML = data?.main?.temp ? Math.round(data.main.temp - 273) + '&deg;C' : '...'
//             })
//     }
// }
//
// citySearch()


// http://api.openweathermap.org/data/2.5/weather
// &appid=e417df62e04d3b1b111abeab19cea714





