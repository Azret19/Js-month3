
// setTimeout(() => {
//     let num = 0
//     console.log(num)
//     setTimeout(() => {
//         console.log(num + 10)
//         setTimeout(() => {
//             num = 'ten'
//             console.log(num)
//         }, 3000)
//     }, 1000)
// }, 2000)

// console.log('Loading...')

// setTimeout(() => {
//     const product = {
//       name: 'Milk',
//       price: '$6'
//     }
//     console.log('1 step')
//     console.table(product)
//     setTimeout(() => {
//         product.price = '$*8'
//         console.log('2 step')
//         console.table(product)
//     },3000)
// }, 1000)

// Promise

// console.log('Loading...')
//
// const promiseVariable = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Milk',
//             price: '$6'
//         }
//         console.log('1 step')
//         console.table(product)
//         resolve(product)
//         reject()
//     }, 2000)
// })
//
// const resolveData = (product) => {
//     setTimeout(() => {
//         product.price = '$8'
//         console.log('2 step')
//         console.table(product)
//     }, 1000)
// }
//
// const rejectData = () => {
//     return console.error('ERROR: PROMISE IS NIT RESOLVED')
// }
//
// promiseVariable.then(resolveData, rejectData)



// const promiseVariable = new Promise((resolve) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Milk',
//             price: '$6'
//         }
//         console.log('1 step')
//         console.table(product)
//         resolve(product)
//     }, 2000)
// })
//
// promiseVariable.then((product) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             product.soldOut = true
//             console.log('2 step')
//             console.table(product)
//             resolve(product)
//         },2000)
//     })
// }).then((product) => {
//     setTimeout(() => {
//         product.soldOut = false
//         product.price = '$10'
//         console.log('3 step')
//         console.table(product)
//     }, 4000)
// }).catch(() => {
//     return console.log('ERROR')
// }).finally(() => {
//     console.log('FINALLY')
// })


// fetch(), API

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/100')
//     .then((response) => response.json())
//     .then((data) => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/todos/100', {
//     method: "GET",
//     headers: {"Content-Type": "application/json"}
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
