'use strict';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = 'black';
canvas.style.opacity = 0.2;

class Mine {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Enemy extends Mine {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
  }
}
const dino = new Mine(10, 300, 50, 50, 'green');
const enemy1 = new Enemy(350, 300, 55, 55, 'red');
const enemy2 = new Enemy(700, 300, 55, 55, 'red');
dino.draw();

const Enemies = [];
function jump() {
  requestAnimationFrame(jump);
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  const enemies = new Enemy();
  Enemies.push(enemies);
  Enemies.forEach(item => {
    item.x--;
    item.draw();
  })
  dino.draw();
}
jump();