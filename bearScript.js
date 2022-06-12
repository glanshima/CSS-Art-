//Bear Script

let getTeddyHead = document.querySelector('.teddy-head');

let teddyEyeLeft = document.querySelector('.teddy-eye-left');
let teddyEyeRight = document.querySelector('.teddy-eye-right');

//let teddyEyeCS = window.getComputedStyle(teddyEyeLeft, "::after");

//accessing pseudo element to change color

let teddyEyeLeftAfter = document.head.appendChild(document.createElement("style"));
let teddyEyeRightAfter = document.head.appendChild(document.createElement("style"));



getTeddyHead.addEventListener('mouseover', function() {
    teddyEyeLeft.style = "background-color: #270303";
    teddyEyeRight.style = "background-color: #270303";
    teddyEyeLeftAfter.innerHTML = ".teddy-eye-left:after {background: #270303}";
    teddyEyeRightAfter.innerHTML = ".teddy-eye-right:after {background: #270303}";




})
getTeddyHead.addEventListener('mouseout', function() {

    teddyEyeLeft.style = "background-color: #fff";
    teddyEyeRight.style = "background-color: #fff";
    teddyEyeLeftAfter.innerHTML = ".teddy-eye-left:after {background: #000}";
    teddyEyeRightAfter.innerHTML = ".teddy-eye-right:after {background: #000}";



})

//console.log(teddyEyeCS.backgroundColor);