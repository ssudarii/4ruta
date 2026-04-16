function setup() {
  createCanvas(500, 700);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(245);

  noStroke();
  fill(45, 75, 150);
  rect(0, 0, width, 60);
  
  fill(255);
  textSize(18);
  text("LIVE 중계", width / 2, 30);

  fill(50);
  textSize(24);
  textStyle(BOLD);
  text("삼성 승리투수 후라도, 결승타 이재현", width / 2, height / 2 - 20);
  
  textSize(16);
  textStyle(NORMAL);
  text("실시간 데이터 업데이트 예정입니다.", width / 2, height / 2 + 20);

  fill(150);
  textSize(14);
  text("화면을 클릭하면 이전 목록으로 돌아갑니다.", width / 2, height - 50);
}

function mousePressed() {
  window.location.href = "run.html"; 
}