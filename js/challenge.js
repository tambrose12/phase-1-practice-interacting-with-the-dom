
//Feel free to change, assinging the minus button to variable named minus
const minusBtn = document.querySelector("#minus");
//I just assigned the plus bottom
const plusBtn = document.querySelector("#plus");
//assigned heartBtn variable to grab the heart id button for changes
const heartBtn = document.getElementById("heart");
//assigning counter variable
let counter = document.getElementById('counter');

const likesContainer = document.querySelector('.likes')

console.log(likesContainer)


//Functions:
const addToCounter = () => {
    const stringAsNumber = parseInt(counter.textContent)
    counter.textContent = stringAsNumber + 1
}

const subtractFromCounter = () => {
    const stringAsNumber = parseInt(counter.textContent)
    counter.textContent = stringAsNumber - 1
}

const addLike = () => {
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

//Event Listeners calling functions:
plusBtn.addEventListener('click', addToCounter)

minusBtn.addEventListener('click', subtractFromCounter)

heartBtn.addEventListener('click', addLike)





















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
