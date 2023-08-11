const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


const regExp1 = /^[a-zA-Z0-9\-_.]+@gmail.com$/

gmailCheck.onclick = () => {
    if (regExp1.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

// const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let moveBlock = 0
const block = () => {
    if (moveBlock < 447) {
        moveBlock++
        childBlock.style.left =`${moveBlock}px`
        block()
    }
}
block()
// [a-zA-Z][a-zA-Z0-9\-\_\.]
// parentBlock.style.left = childBlock+"px"