import {
  Actor,
  Keys,
  SpriteSheet,
  Vector,
  range,
  Animation,
  CollisionType,
  Shape,
} from "excalibur";
import { Resources } from "../../resources";
import { DialogueHandler } from "../dialogueHandler";

export class Player extends Actor {
  constructor(x, y) {
    super({
      x,
      y,
      width: 16,
      height: 10,
      collisionType: CollisionType.Active,
      collider: Shape.Box(16, 10, new Vector(0.5, -0.45)),
    });

    const playersheet = SpriteSheet.fromImageSource({
      image: Resources.PlayerSheet,
      grid: { rows: 2, columns: 5, spriteWidth: 16, spriteHeight: 30 },
    });

    const idle = playersheet.sprites[5];
    const walkingSide = Animation.fromSpriteSheet(
      playersheet,
      range(6, 8),
      150,
    );
    const walkingFront = Animation.fromSpriteSheet(
      playersheet,
      range(0, 1),
      150,
    );
    const walkingBack = Animation.fromSpriteSheet(
      playersheet,
      range(3, 4),
      150,
    );
    this.graphics.add("idle", idle);
    this.graphics.add("walkingSide", walkingSide);
    this.graphics.add("walkingFront", walkingFront);
    this.graphics.add("walkingBack", walkingBack);
    this.graphics.use(idle);
    this.scale = new Vector(5.5, 5.5);
  }

  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    this.graphics.use("idle");

    if (
      engine.input.keyboard.isHeld(Keys.A) ||
      engine.input.keyboard.isHeld(Keys.ArrowLeft)
    ) {
      this.graphics.use("walkingSide");
      this.graphics.flipHorizontal = true;
      xspeed = -300;
    }
    if (
      engine.input.keyboard.isHeld(Keys.D) ||
      engine.input.keyboard.isHeld(Keys.ArrowRight)
    ) {
      xspeed = 300;
      this.graphics.use("walkingSide");
      this.graphics.flipHorizontal = false;
    }
    if (
      engine.input.keyboard.isHeld(Keys.W) ||
      engine.input.keyboard.isHeld(Keys.ArrowUp)
    ) {
      this.graphics.use("walkingBack");
      yspeed = -300;
    }
    if (
      engine.input.keyboard.isHeld(Keys.S) ||
      engine.input.keyboard.isHeld(Keys.ArrowDown)
    ) {
      this.graphics.use("walkingFront");
      yspeed = 300;
    }

    if (engine.input.keyboard.isHeld(Keys.Enter)) {
      DialogueHandler.activateHomeDialogue(engine, "backpackDialogueStart");
    }

        if (engine.input.keyboard.isHeld(Keys.P)) {
      DialogueHandler.activateHomeDialogue(engine, "backpackDialogueEnd");
    }
    this.vel = new Vector(xspeed, yspeed);
  }
}
