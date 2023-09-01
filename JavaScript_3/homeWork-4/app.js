const peaplesBlock = document.querySelector('.peoples')
const dataHome = `dataHome.json`
const dataHome2 = `dataHome2.json`

const peoplesData = async () => {
    try {
        const response = await fetch(dataHome)
        const data = await response.json()
        data.forEach((person) => {
            const div = document.createElement('div')
            div.classList.add('card')
            div.innerHTML = `
            <img src="data:image/png;base64,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" alt="Profile">
            <h3>Name: ${person.name}</h3>
            <span>Age: ${person.age}</span>
        `
        peaplesBlock.append(div)
        })
    } catch (e) {
        console.error(e, 'ERROR')
    }
}
peoplesData()

const brothersData = async () => {
    try {
        const response = await fetch(dataHome2)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e, 'ERROR')
    }
}

brothersData()


// const request = new XMLHttpRequest()
// request.open("GET", "dataHome.json")
// request.setRequestHeader("Content-type", "application/json")
// request.send()
// request.addEventListener('load', () => {
//     const peoples = JSON.parse(request.response)
//     peoples.forEach((person)=>{
//         const div = document.createElement('div')
//         div.classList.add('card')
//         div.innerHTML = `
//         <img src="data:image/png;base64,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" alt="Profile">
//         <h3>Name: ${person.name}</h3>
//         <span>Age: ${person.age}</span>
//     `
//         peaplesBlock.append(div)
//     })
// })
// const request1 = new XMLHttpRequest()
// request1.open("GET", "dataHome2.json")
// request1.setRequestHeader("Content-type", "application/json")
// request1.send()
// request1.addEventListener('load', () => {
//     const meAndBro = JSON.parse(request1.response)
//     console.log(meAndBro)
// })







