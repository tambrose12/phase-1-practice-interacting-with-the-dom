
//Feel free to change, assinging the minus button to variable named minus
const minus = document.querySelector("#minus");

//I just assigned the plus bottom
const plus = document.querySelector("#plus");

//assigned heartBtn variable to grab the heart id button for changes
const heartBtn = document.getElementById("heart");

//assigning counter variable
let counter = document.getElementById('counter');


number = 0

const addToCounter = (count) => {    
    do {
    
    number ++

    console.log(number)

    counter.textContent = number
    
    } while (number < 1)
}

plus.addEventListener('click', addToCounter)