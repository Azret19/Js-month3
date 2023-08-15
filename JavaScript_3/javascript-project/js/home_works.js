const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


const regExp1 = /^[a-zA-Z0-9\-_.]+@gmail\.com$/

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
const box = document.querySelector('.child_block')

let PositionX = 0
let PositionY = 0

const move = () => {
    if (PositionX < 448 && PositionY === 0) {
        PositionX++
        box.style.left = `${PositionX}px`
        setTimeout(move, 1)
    } else if (PositionX >= 448 && PositionY < 448) {
        PositionY++
        box.style.top = `${PositionY}px`
        setTimeout(move, 1)
    }else if (PositionY > 0 && PositionX > 0) {
        PositionX--
        box.style.left = `${PositionX}px`
        setTimeout(move, 1)
    }else if (PositionX === 0 && PositionY > 0) {
        PositionY--
        box.style.top = `${PositionY}px`
        setTimeout(move, 1)
    }

}
move()

const seconds = document.querySelector('#seconds')
const buttonStart = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')
const buttonReset = document.querySelector('#reset')
const buttonResume = document.querySelector('#resume')

let secondsTime = 0
let interval

const startTime = () => {
  secondsTime++
  seconds.innerHTML = secondsTime
}

buttonStart.onclick = () => {
    clearInterval(interval)
    interval = setInterval(startTime, 1000)
    buttonStart.onclick = buttonStop
    buttonStop.onclick = () => {
        clearInterval(interval)
        buttonResume.onclick = () => {
            clearInterval(interval)
            interval = setInterval(startTime, 1000)
            buttonResume.onclick = buttonStop
        }
    }
    buttonReset.onclick = () => {
        clearInterval(interval)
        seconds.innerHTML = '0'
        secondsTime = 0
        buttonResume.onclick = () => {
            clearInterval(interval)
        }
        buttonStart.onclick = () => {
            clearInterval(interval)
            interval = setInterval(startTime, 1000)
            buttonStart.onclick = buttonStart
        }
    }
}






// buttonReset.onclick = () => {
//     seconds.innerHTML = '0'
//     secondsTime = 0
//     clearInterval(interval)
//             buttonResume.onclick = () => {
//                 clearInterval(interval)
//                 interval = setInterval(startTime, 1000)
//                 buttonStart.onclick = buttonStop
//     }
// }



// buttonStart.onclick = () => {
//     clearInterval(interval)
//     interval = setInterval(startTime, 1000)
//     buttonStart.onclick = buttonStop
//     buttonStop.onclick = () => {
//         clearInterval(interval)
//         buttonResume.onclick = () => {
//             clearInterval(interval)
//             interval = setInterval(startTime, 1000)
//             buttonReset.onclick = buttonStop
//         }
//     }
// }
