
//Feel free to change, assinging the minus button to variable named minus
const minus = document.querySelector("#minus");

//I just assigned the plus bottom
const plus = document.querySelector("#plus");

//assigned heartBtn variable to grab the heart id button for changes
const heartBtn = document.getElementById("heart");

//assigning counter variable
const counter = document.getElementById('counter').textContent;


const addToCounter = (count) => {
    counter += 1
    console.log(` ${count} `)

}

plus.addEventListener('click', addToCounter)