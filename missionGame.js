// Game objects
const PLAYER_WIDTH = 20;
const PLAYER_HEIGHT = 20;

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    document.getElementById("missionArea").innerHTML += "<div style='width: 20px; height: 20px; background-color: red; position: absolute; left: " + this.x + "px; top: " + this.y + "px;'></div>";
  }
}

// Game initialization
const player = new Player(50, 50);

function gameLoop() {
  player.draw();

  setTimeout(gameLoop, 100);
}

gameLoop();
