import { Actor, Keys, SpriteSheet, Vector, range, Animation} from "excalibur";
import { Resources } from "../../resources";

export class Player extends Actor {
  constructor() {
    super();

    const playersheet = SpriteSheet.fromImageSource({
      image: Resources.PlayerSheet,
      grid: { rows: 2, columns: 4, spriteWidth: 16, spriteHeight: 30}
    })

    const idle = playersheet.sprites[4]
    const walk = Animation.fromSpriteSheet(playersheet, range(5,8), 150)
    this.graphics.add("idle", idle)
    this.graphics.add("walking", walk)
    this.graphics.use(idle);
    this.scale = new Vector(3,3)
  }





  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    this.graphics.use("idle")

    if (engine.input.keyboard.isHeld(Keys.A)) {
      this.graphics.use("walking")
      this.graphics.flipHorizontal = true
      xspeed = -300;
    }
    if (engine.input.keyboard.isHeld(Keys.D)) {
      xspeed = 300;
      this.graphics.use("walking")
      this.graphics.flipHorizontal = false
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
