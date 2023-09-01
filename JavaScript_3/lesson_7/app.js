// async await
const url = `https://jsonplaceholder.typicode.com/todos?_limit=10`

//try catch

const fetchData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e, 'ERROR')
    }
}

fetchData()




// const response = await fetch(url)
// const data = await response.json()
// data.forEach((item) => {
//     console.log(item)
// })