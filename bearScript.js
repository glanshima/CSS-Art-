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