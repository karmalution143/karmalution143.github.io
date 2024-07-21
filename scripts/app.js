

let menuOpen = false;

function toggleMenu() {
  if(!menuOpen) {   // open menu
    $('#mobileNav').animate({
      right: 0
    }, 420, 'swing');
  }
  else {  // close menu
    $('#mobileNav').animate({
      right: -175
    }, 420, 'swing');
  }
  menuOpen = !menuOpen;
}

function menuDelay() {
  let delay = setTimeout(toggleMenu, 400);
}

 let portOpen = false;

 function portMenu() {
   if(!portOpen) {   // open menu
     $('#portNav').animate({
       bottom: 0
     }, 420, 'swing');
   }
   else {  // close menu
     $('#portNav').animate({
       bottom: -175
     }, 420, 'swing');
   }
   portOpen = !portOpen;
 }

let backgroundChange = document.querySelector('header');
function displayPort() {
  backgroundChange.classList.add('stars');
  backgroundChange.classList.add('twinkling');
  document.querySelector('.stock-link').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
  const stockLink = document.querySelector('.stock-link');
  const motoLink = document.querySelector('.moto-link');
  const dogLink = document.querySelector('.dog-link');
  const gameLink = document.querySelector('.game-link');
  if (stockLink) {
    setTimeout(() => {
      stockLink.classList.add('show');
    }, 300);
  }
  if (motoLink) {
    setTimeout(() => {
      motoLink.classList.add('show');
    }, 1000);
  }
  if (dogLink) {
    setTimeout(() => {
      dogLink.classList.add('show');
    }, 600);
  }
  if (gameLink) {
    setTimeout(() => {
      gameLink.classList.add('show');
    }, 900);
  }
});

let number = 13;
let value = 18;

switch (value) {
  case 33:
  case 32:
  case 18:
    console.log(value);
    console.log('success');
    break;
  case 13:
    console.log(value)
    console.log('lucky number');
    break;
  default:
    console.log('oops');
    break;
}

let result = (number > 0 && number < 14) ? console.log('success') : console.log('oops'); //true : false

if(number > 0 && number < 14) {
  console.log('success');
}
else {
  console.log('oops');
}

// let studentCount = 21;

// for(let i = 1; i <= studentCount; i++) {
//   console.log('Student number ' + i);
// }

// let count = 1;
// while(count <= studentCount) {
//   console.log('while Student number ' + count);
//   count ++;
// }

let kids = 15

do {
  console.log('Where are my kids?');
} while(kids < 13);

let coins = 10;

for(let i = 1; i <= coins; i++) {
  console.log('break: you have ' + i + ' coin(s)!');
    if (i === 5)
    break;
}