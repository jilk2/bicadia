import { Actor, Keys, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../../resources";

export class Player extends Actor {
  constructor() {
    super();

    const playersheet = SpriteSheet.fromImageSource({
      image: Resources.PlayerSheet,
      grid: { rows: 2, columns: 4, spriteWidth: 16, spriteHeight: 30}
    })

    const idle = playersheet.sprites[4]
    this.graphics.add("idle", idle)
    this.graphics.use(idle);
    this.scale = new Vector(3,3)
  }





  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    if (engine.input.keyboard.isHeld(Keys.A)) {
      xspeed = -300;
    }
    if (engine.input.keyboard.isHeld(Keys.D)) {
      xspeed = 300;
    }
    if (engine.input.keyboard.isHeld(Keys.W)) {
      yspeed = -300;
    }
    if (engine.input.keyboard.isHeld(Keys.S)) {
      yspeed = 300;
    }
    this.vel = new Vector(xspeed, yspeed);
  }
}
