const cards = document.querySelector('.cards')
const url = `https://jsonplaceholder.typicode.com/posts`

const cardsData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.forEach((item) => {
            const div = document.createElement('div')
            div.classList.add('cardData')
            div.innerHTML = `
            <img src="https://s1.1zoom.me/prev/531/Fantastic_world_530349_600x240.jpg" alt="Profile">
            <h2 style="margin-bottom: 20px">${item.title}</h2>
            <h4 style="color: darkred">${item.body}</h4>
            `
            cards.append(div)
        })
    } catch (e) {
            console.error(e, 'ERROR')
    }
}
cardsData()