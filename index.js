const { r, Rectangle } = require('./classes');

const screenWidth = 800;
const screenHeight = 450;

let rectFirst = new Rectangle(0, 0, 50, 25, r.RED);

r.InitWindow(screenWidth, screenHeight, 'test');
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.RAYWHITE);
  r.DrawRectangle(...rectFirst);
  rectFirst.controls();
  rectFirst.checkBorders(screenWidth, screenHeight);
  r.EndDrawing();
}
r.CloseWindow();
