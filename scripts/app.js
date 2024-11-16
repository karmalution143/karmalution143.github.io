

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

// let number = 13;
// let value = 18;

// switch (value) {
//   case 33:
//   case 32:
//   case 18:
//     console.log(value);
//     console.log('success');
//     break;
//   case 13:
//     console.log(value)
//     console.log('lucky number');
//     break;
//   default:
//     console.log('oops');
//     break;
// }

// let result = (number > 0 && number < 14) ? console.log('success') : console.log('oops'); //true : false

// if(number > 0 && number < 14) {
//   console.log('success');
// }
// else {
//   console.log('oops');
// }

// let studentCount = 21;

// for(let i = 1; i <= studentCount; i++) {
//   console.log('Student number ' + i);
// }

// let count = 1;
// while(count <= studentCount) {
//   console.log('while Student number ' + count);
//   count ++;
// }

// let kids = 15

// do {
//   console.log('Where are my kids?');
// } while(kids < 13);

// let coins = 10;

// for(let i = 1; i <= coins; i++) {
//   console.log('break: you have ' + i + ' coin(s)!');
//     if (i === 5)
//     break;
// }


//********* SNAKE GAME **********//

    let canvas = document.getElementById('gameCanvas');
    let context = canvas.getContext('2d');
    let box = 20;
    let snake = [];
    snake[0] = { x: 15 * box, y: 15 * box };
    let direction = 'RIGHT';
    let food = {
      x: Math.floor(Math.random() * 30) * box,
      y: Math.floor(Math.random() * 30) * box
    };
    let score = 0;

    document.addEventListener('keydown', setDirection);

    function setDirection(event) {
      if (event.keyCode == 37 && direction != 'RIGHT') direction = 'LEFT';
      else if (event.keyCode == 38 && direction != 'DOWN') direction = 'UP';
      else if (event.keyCode == 39 && direction != 'LEFT') direction = 'RIGHT';
      else if (event.keyCode == 40 && direction != 'UP') direction = 'DOWN';
    }

    function drawGame() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < snake.length; i++) {
        context.fillStyle = (i == 0) ? 'green' : 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
        context.strokeStyle = 'green';
        context.strokeRect(snake[i].x, snake[i].y, box, box);
      }

      context.fillStyle = 'red';
      context.fillRect(food.x, food.y, box, box);

      let snakeX = snake[0].x;
      let snakeY = snake[0].y;

      if (direction == 'LEFT') snakeX -= box;
      if (direction == 'UP') snakeY -= box;
      if (direction == 'RIGHT') snakeX += box;
      if (direction == 'DOWN') snakeY += box;

      if (snakeX == food.x && snakeY == food.y) {
        score++;
        document.getElementById('score').textContent = score;
        food = {
          x: Math.floor(Math.random() * 30) * box,
          y: Math.floor(Math.random() * 30) * box
        };
      } else {
        snake.pop();
      }

      let newHead = {
        x: snakeX,
        y: snakeY
      };

      if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        alert('Game Over');
      }

      snake.unshift(newHead);
    }

    function collision(head, array) {
      for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
          return true;
        }
      }
      return false;
    }

    function startGame() {
      score = 0;
      document.getElementById('score').textContent = score;
      snake = [];
      snake[0] = { x: 10 * box, y: 10 * box };
      direction = 'RIGHT';
      clearInterval(game);
      game = setInterval(drawGame, 100);
    }

    let game = setInterval(drawGame, 100);