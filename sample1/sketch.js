function setup() {
  createCanvas(600, 400);
}

function draw() {
  colorMode(HSB)
  background(15);
  noStroke();
  
  //하늘 명암
  for(var i = 0; i < 4; i++){
    fill(18+i*4);
    quad(0, 0, 600, 0, 600, 140-40*i, 0, 190-40*i);
  }
  
  // 달
  fill(60, 100, 75);
  ellipse (70, 50, 50);
  fill(60, 100, 100);
  ellipse (73, 48, 46);
  fill(30);
  ellipse (85, 40, 40);
  
  //달 크레이터
  fill(60, 100, 70);
  ellipse(80, 64, 6, 5);
  ellipse(70, 63, 4, 5);
  ellipse(60, 58, 2, 3);
  ellipse(64, 57, 4, 5);
  ellipse(60, 50, 6, 7);
  ellipse(60, 41, 5, 6);
  ellipse(62, 34, 3, 4);
  
  //월광
  noFill()
  strokeWeight (20)
  var brt = 100;
  var sat = 100;
  var rad = 20;
  for(var i = 0; i < 6; i++){
    rad += 100;
    stroke(60, sat, brt);
    ellipse(70, 50, rad);
    brt -= 14;
    sat -=20;
  }
  noStroke();
  
  //산 베이스
  fill(120, 30, 25);
  triangle(200, 190, 500, 400, 0, 400);
  quad(500, 400, 600, 400, 600, 200, 500, 100);
  
  fill(120, 30, 37);
  triangle(200, 190, 0, 300, 0, 400);
  triangle(500, 400, 500, 100, 300, 260);
  
  //산 하이라이트
  fill(70, 100, 55);
  triangle(200, 190, 80, 256, 140, 253);
  triangle(0, 400, 0, 300, 80, 316);
  
  triangle(500, 100, 420, 164, 500, 200);
  triangle(500, 200, 500, 300, 400, 250);
  triangle(300, 260, 340, 288, 400, 250);
  
  fill(70, 100, 45);
  triangle(80, 256, 0, 300, 80, 316);
  
  triangle(500, 300, 500, 400, 400, 250);
  triangle(300, 260, 420, 164, 400, 250);
  
  //산 그림자
  fill(120, 30, 19);
  triangle(200, 190, 220, 320, 140, 253);
  triangle(0, 400, 220, 400, 80, 316);
  triangle(220, 400, 220, 320, 350, 295);
  triangle(380, 400, 500, 400, 350, 295);
  triangle(200, 190, 260, 260, 350, 295);
  
  triangle(500, 100, 600, 200, 500, 200);
  triangle(500, 300, 600, 250, 600, 400);
  
  
  fill(120, 30, 14);
  triangle(380, 400, 220, 400, 350, 295);
  triangle(220, 320, 220, 400, 80, 316);
  triangle(260, 260, 220, 320, 350, 295);
  triangle(500, 300, 500, 400, 600, 400);
  
  triangle(600, 250, 600, 200, 500, 200);
  
}