
// Just function Call 
function makeRed(){
    document.body.style.backgroundColor = 'red';

}
// just  set the name of function 
const makeBlackButton = document.getElementById("make-black");
makeBlackButton.onclick = makeBlack;
function makeBlack(){
    document.body.style.backgroundColor = 'black';
}

 
// Anonymous Function
const greenButton = document.getElementById("make-green-button");

greenButton.onclick = function(){
    document.body.style.backgroundColor = 'green';
}

// Handel by using EventListener
const goldenButton = document.getElementById("make-golden-rod");
goldenButton.addEventListener('click', goldenRod);

function goldenRod(){
    document.body.style.backgroundColor = "goldenrod";
}

//addEventlistener
const hotPinkButton = document.getElementById("make-hotpink");
hotPinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'hotpink';
})

// Direct Shortcut 
const lightBlueButton = document.getElementById("make-lightBlue").addEventListener("click", function(){
    document.body.style.backgroundColor = 'lightblue';
})