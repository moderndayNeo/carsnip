document.getElementsByTagName('p')[1].innerHTML = "stirFry";

function showShape() {
    document.getElementById('shape').style.visibility='visible';
}

function hideShape() {
    document.getElementById('shape').style.visibility='hidden';
}

document.getElementById('shapeButton').addEventListener('click', showShape);
document.getElementById('shapeButton2').addEventListener('click',hideShape);



function showImage() {
    document.getElementById('baltimore').style.visibility = "visible";
    }

function hideImage() {
    document.getElementById('baltimore').style.visibility = "hidden";
    }

document.getElementById('hideTheImage').addEventListener('click',hideImage);
document.getElementById('showTheImage').addEventListener('click',showImage);



var redDot = document.getElementById('redDot');
var greenDot = document.getElementById('greenDot');
var lightButton = document.getElementById('lightFade');

lightButton.addEventListener('click',changeTheLights);

function changeTheLights() {
    redDot.classList.toggle('hidden');
    greenDot.classList.toggle('visible');
}



document.getElementById('blueButton').addEventListener('click',turnBlue);

function turnBlue() {
   /* redDot.classList.toggle('blue'); */
    document.getElementById('redDot').style.backgroundColor = 'blue'; 
}

/*
document.body.addEventListener('click',changeText);

function changeText() {
    document.getElementById('textToChange').innerHTML = 'This text has been changed';
}

window.body.addEventListener('resize', changeBg);

function changeBg() {
    document.body.style.backgroundColor = 'grey';
}
*/


/*
let bird = document.getElementById('chicken');
bird.addEventListener('click', toGold);
bird.style.backgroundColor = 'gold';
*/

bird = document.getElementById('chicken');
bird.addEventListener('click', toGold);

function toGold() {
    bird.style.backgroundColor = 'gold';
}

/* IT WAS GLITCHING BECAUSE I HAD A WHOLE BODY ONCLICK LISTENER

document.getElementById('chicken').addEventListener('click', toGold);
    document.getElementById('chicken').style.backgroundColor = 'gold';


*/