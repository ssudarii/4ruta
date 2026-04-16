let games = [
  { team1: "삼성", score1: 6, team2: "한화", score2: 1, inning: "경기 종료", bases: [false, false, false], status: "0B 0S 0O" },
  { team1: "KT", score1: 4, team2: "NC", score2: 3, inning: "7회말", bases: [false, true, true], status: "2B 2S 2O" },
  { team1: "롯데", score1: 4, team2: "LG", score2: 7, inning: "8회말", bases: [false, false, false], status: "0B 0S 2O" },
  { team1: "키움", score1: 1, team2: "KIA", score2: 5, inning: "9회초", bases: [true, false, false], status: "0B 0S 1O" },
  { team1: "두산", score1: 1, team2: "SSG", score2: 2, inning: "8회말", bases: [true, true, false], status: "0B 2S 0O" }
];

const BTN_WIDTH = 55;
const BTN_HEIGHT = 40;

function setup() {
  createCanvas(500, 700); 
}

function draw() {
  background(240);
  drawHeader();
  for (let i = 0; i < games.length; i++) {
    drawGameRow(i, 80 + i * 110, games[i]);
  }
}

function drawHeader() {
  noStroke();
  fill(45, 75, 150);
  rect(0, 0, width, 60);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(" 4월 16일 (목) ", width / 2, 30);
}

function drawGameRow(index, y, game) {
  push();
  fill(255);
  stroke(230);
  rect(15, y, width - 30, 100, 8); 

  let centerX = width / 2;
  let centerY = y + 50;

  drawCenterStatus(centerX, centerY, game);
  drawTeamLeft(centerX - 60, centerY, game.team1, game.score1, game.score1 > game.score2);
  drawTeamRight(centerX + 60, centerY, game.team2, game.score2, game.score2 > game.score1);
  drawLiveButton(width - 60, centerY);
  pop();
}

function drawCenterStatus(x, y, game) {
  textAlign(CENTER, CENTER);
  fill(50, 80, 150);
  textSize(13);
  textStyle(BOLD);
  text(game.inning, x, y - 28);
  drawBases(x, y + 2, game.bases);
  fill(150);
  textStyle(NORMAL);
  textSize(11);
  text(game.status, x, y + 35);
}

function drawTeamLeft(x, y, name, score, isWinning) {
  textAlign(RIGHT, CENTER);
  fill(80);
  textSize(16);
  textStyle(NORMAL);
  text(name, x - 60, y); 

  fill(isWinning ? 'red' : 50);
  textSize(32);
  textStyle(BOLD);
  text(score, x, y); 
}

function drawTeamRight(x, y, name, score, isWinning) {
  textAlign(LEFT, CENTER);
  fill(isWinning ? 'red' : 50);
  textSize(32);
  textStyle(BOLD);
  text(score, x, y); 

  fill(80);
  textSize(16);
  textStyle(NORMAL);
  text(name, x + 60, y); 
}

function drawBases(x, y, states) {
  let size = 9;
  let gap = 11;
  rectMode(CENTER);
  noStroke();
  push();
  translate(x, y);
  rotate(QUARTER_PI);
  fill(states[1] ? color(50, 80, 150) : 230); rect(0, 0, size, size); 
  fill(states[2] ? color(50, 80, 150) : 230); rect(0, gap, size, size); 
  fill(states[0] ? color(50, 80, 150) : 230); rect(gap, 0, size, size); 
  pop();
  rectMode(CORNER);
}

function drawLiveButton(x, y) {
  stroke(200, 50, 50);
  strokeWeight(1.2);
  noFill();
  rectMode(CENTER);
  rect(x, y, BTN_WIDTH, BTN_HEIGHT, 4);
  noStroke();
  fill(200, 50, 50);
  textSize(13);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("LIVE", x, y);
  rectMode(CORNER);
}

function mousePressed() {
  for (let i = 0; i < games.length; i++) {
    
    let btnX = width - 60;
    let btnY = 80 + i * 110 + 50;

    
    if (
      mouseX > btnX - BTN_WIDTH / 2 &&
      mouseX < btnX + BTN_WIDTH / 2 &&
      mouseY > btnY - BTN_HEIGHT / 2 &&
      mouseY < btnY + BTN_HEIGHT / 2
    ) {
      window.location.href = "live.html"; 
    }
  }
}