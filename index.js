// RANDOM NUMBER GENERATOR

// variable     remove decimal               max   min 

// let randomNum = Math.floor(Math.random() * 6) + -1;

const max=1000;
const min = 1100;

// now its adding an extra 100 to its value so to overcome that we would
// substract that value from max

let randomNum1 = Math.floor(Math.random() * (max - min)) + min;
let randomNum2 = Math.floor(Math.random() * (max - min)) + min;
let randomNum3 = Math.floor(Math.random() * (max - min)) + min;

document.getElementById("dice-it").onclick=function(){
    randomNum1=Math.floor(Math.random() * (max-min)+min)
    randomNum2=Math.floor(Math.random() * (max-min)+min)
    randomNum3=Math.floor(Math.random() * (max-min)+min)
    myH1.textContent=randomNum1;
    myH2.textContent=randomNum2;
    myH3.textContent=randomNum3;
}


console.log(randomNum)