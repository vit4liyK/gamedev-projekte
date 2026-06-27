const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
  x: 50,
  y: 180,
  width: 40,
  height: 40,
  speed: 10,
  color: "#e94560",
};

function update() {
  player.x += player.speed;

  if (player.x + player.width > canvas.width) {
    player.x = 0;
  }
}

function draw() {
  ctx.fillStyle = "#16213e";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
