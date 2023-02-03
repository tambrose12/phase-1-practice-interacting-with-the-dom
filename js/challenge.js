
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const heartBtn = document.getElementById("heart");
let counter = document.getElementById('counter');
const likesContainer = document.querySelector('.likes')
const formElement = document.getElementById('comment-form')
const commentContainer = document.getElementById('list')
const pauseBtn = document.getElementById('pause')
const submitBtn = document.getElementById('submit')


//Event Listeners calling functions:
plusBtn.addEventListener('click', addToCounter)
minusBtn.addEventListener('click', subtractFromCounter)
heartBtn.addEventListener('click', addLike)
formElement.addEventListener('submit', addComment)
pauseBtn.addEventListener('click', togglePause)


let paused = false

let intervalID = setInterval(addToCounter, 1000)


//Functions:
function addToCounter() {
    const stringAsNumber = parseInt(counter.textContent)
    counter.textContent = stringAsNumber + 1
}

function subtractFromCounter() {
    const stringAsNumber = parseInt(counter.textContent)
    counter.textContent = stringAsNumber - 1
}

function addLike() {
    const ourNumber = counter.innerText
    const foundLi = document.getElementById(`num-${ourNumber}`)

    if (foundLi) {
        const likesContainer = foundLi.querySelector('span')
        ++likesContainer.textContent

        if (likesContainer.textContent == '2') {
            foundLi.append('s')
        }
    } else {

        const li = document.createElement('li')
        li.id = `num-${ourNumber}`
        const theHTML = `${ourNumber} has been liked <span>1</span> time`
        li.innerHTML = theHTML
        likesContainer.append(li)

    }
}


function addComment(e) {
    e.preventDefault()
    const p = document.createElement('p')
    const pText = e.target.comment.value
    p.textContent = pText
    commentContainer.append(p)
}

function togglePause(e) {
    paused = !paused
    e.target.textContent = paused ? 'resume' : 'pause'
    const buttons = [
        plusBtn, minusBtn, heartBtn, submitBtn
    ]
    buttons.forEach(button => button.disabled = paused ? true : false)

    if (paused === true) {
        clearInterval(intervalID)
    } else {
        setInterval(addToCounter, 1000)
    }
}




















//let numberCounter = 0

// const addToCounter = (e) => {
//     do {

//         numberCounter++

//         counter.textContent = numberCounter

//         console.log(counter)

//     } while (numberCounter < 0)
// }

// const subtractFromCounter = (e) => {
//     do {
//         numberCounter--

//         console.log(numberCounter)

//         counter.textContent = numberCounter

//     } while (numberCounter > 0)
// }
