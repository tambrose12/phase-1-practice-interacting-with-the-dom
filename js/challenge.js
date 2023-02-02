
//Feel free to change, assinging the minus button to variable named minus
const minus = document.querySelector("#minus");

//I just assigned the plus bottom
const plus = document.querySelector("#plus");

//assigned heartBtn variable to grab the heart id button for changes
const heartBtn = document.getElementById("heart");

//assigning counter variable
let counter = document.getElementById('counter');


let numberCounter = 0

const addToCounter = (e) => {    
    do {
    
    numberCounter ++

    console.log(numberCounter)

    counter.textContent = numberCounter
    
    } while (numberCounter < 1)
}



plus.addEventListener('click', addToCounter)