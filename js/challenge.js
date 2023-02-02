
//Feel free to change, assinging the minus button to variable named minus
const minus = document.querySelector("#minus");

//I just assigned the plus bottom
const plus = document.querySelector("#plus");

//assigned heartBtn variable to grab the heart id button for changes
const heartBtn = document.getElementById("heart");

//assigning counter variable
let counter = document.getElementById('counter');
let a = counter.textContent

let numberCounter = 0

const addToCounter = (e) => {
    do {

        numberCounter++

        counter.textContent = numberCounter

        console.log(counter)

    } while (numberCounter < 0)
}

const subtractFromCounter = (e) => {
    do {
        numberCounter--

        console.log(numberCounter)

        counter.textContent = numberCounter

    } while (numberCounter > 0)
}



plus.addEventListener('click', addToCounter)

minus.addEventListener('click', subtractFromCounter)