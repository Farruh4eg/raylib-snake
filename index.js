const { r, Rectangle } = require('./classes');

const screenWidth = 800;
const screenHeight = 450;

let humveeImage = r.LoadImage('static/humvee.png');
r.UnloadImage(humveeImage);

let rectFirst = new Rectangle(0, 0, 50, 25, r.RED);
rectFirst.setVelocity(1.5);

let spawned,
  score = 0;

r.InitWindow(screenWidth, screenHeight, 'test');
r.SetTargetFPS(60);

spawn();

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  if (rectFirst.isIntersecting(spawned)) {
    spawned.remove(screenWidth, screenHeight);
    spawn();
    score++;
  }
  r.ClearBackground(r.RAYWHITE);
  r.DrawText(score.toString(), screenWidth / 2, 0, 26, r.BLACK);
  r.DrawTexture(humveeTexture, ...rectFirst);
  r.DrawRectangle(...spawned);
  rectFirst.controls();
  rectFirst.checkBorders(screenWidth, screenHeight);

  r.EndDrawing();
}
r.CloseWindow();

function spawn() {
  spawned = new Rectangle(
    Math.random() * screenWidth,
    Math.random() * screenHeight,
    12.5,
    12.5,
    r.BLUE
  );
}
