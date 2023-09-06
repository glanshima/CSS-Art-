
const header = document.querySelector('.header');
const canvas = document.querySelector('.canvas');
const menuIcon = document.querySelector('.menu-icon ');
const menu = document.querySelector('.menu ');
let canvasPos = canvas.getBoundingClientRect().bottom;
let menuOpenedState = false;
/* event delegation  */


function clickEvents(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    })
}

/* open and close responsive menu */

clickEvents('click', '.menu', (e) => {
    if (menuOpenedState === false) {
        header.classList.add('open');
        menuIcon.classList.add('spin');
        menuOpenedState = true;

    } else if (menuOpenedState === true) {
        header.classList.remove('open');
        menuIcon.classList.remove('spin');
        menuOpenedState = false
    }

})

/* 
menu.addEventListener('click', (e) => {
    if (menuOpenedState === false) {
        header.classList.add('open');
        menuIcon.classList.add('spin');
        menuOpenedState = true;

    } else if (menuOpenedState === true) {
        header.classList.remove('open');
        menuIcon.classList.remove('spin');
        menuOpenedState = false
    }
}) */

function stickHeader(e) {

    let scrollPos = window.scrollY;
    if (scrollPos > 100) {
        header.classList.add('sticky');
        header.style.cssText = "position: sticky; top: 0;";

    } else {
        header.classList.remove('sticky');
        header.style.cssText = "position: relative; top: 0;";
    }
}



window.addEventListener('resize', (e) => {
    if (window.innerWidth >= 700) {
        if (menuOpenedState === true) {
            header.classList.remove('open')
            menuIcon.classList.remove('spin');
            menuOpenedState = false
        }
    }
})

window.addEventListener('scroll', (e) => {
    if (menuOpenedState === true) {
        header.classList.remove('open')
        menuIcon.classList.remove('spin');
        menuOpenedState = false;
        stickHeader(e);
    } else {
        stickHeader(e);
    }

})



//Bear Script

let getTeddyHead = document.querySelector('.teddy-head');

let teddyEyeLeft = document.querySelector('.teddy-eye-left');
let teddyEyeRight = document.querySelector('.teddy-eye-right');

closeEyesEvents('mouseover', ".teddy-eye-left", e => {

    teddyEyeLeft.style.cssText = "background-color: #270303; cursor: pointer";
    teddyEyeLeftAfter.innerHTML = ".teddy-eye-left:after {background: #270303}";
})
closeEyesEvents('mouseover', ".teddy-eye-right", e => {

    teddyEyeRight.style.cssText = "background-color: #270303; cursor: pointer";
    teddyEyeRightAfter.innerHTML = ".teddy-eye-right:after {background: #270303}";
})



function closeEyesEvents(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    })

}

//let teddyEyeCS = window.getComputedStyle(teddyEyeLeft, "::after");

//accessing pseudo element to change color

let teddyEyeLeftAfter = document.head.appendChild(document.createElement("style"));
let teddyEyeRightAfter = document.head.appendChild(document.createElement("style"));



closeEyesEvents('mouseout', ".teddy-eyes", e => {
    setTimeout(() => {
        teddyEyeLeft.style = "background-color: #fff";
        teddyEyeRight.style = "background-color: #fff";
        teddyEyeLeftAfter.innerHTML = ".teddy-eye-left:after {background: #000}";
        teddyEyeRightAfter.innerHTML = ".teddy-eye-right:after {background: #000}";
    }, 500);

})

//console.log(teddyEyeCS.backgroundColor);