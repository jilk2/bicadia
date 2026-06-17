import { Actor, Keys, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from "../../resources";

export class Player extends Actor {
  inCutscene
  bodyparts

  constructor(x, y, inCutscene) {
    super({ x, y });
    this.inCutscene = inCutscene
    const playersheet = SpriteSheet.fromImageSource({
      image: Resources.PlayerSheet,
      grid: { rows: 2, columns: 5, spriteWidth: 16, spriteHeight: 30 }
    })

    const idle = playersheet.sprites[5]
    const walkingSide = Animation.fromSpriteSheet(playersheet, range(6, 8), 150)
    const walkingFront = Animation.fromSpriteSheet(playersheet, range(0, 1), 150)
    const walkingBack = Animation.fromSpriteSheet(playersheet, range(3, 4), 150)
    this.graphics.add("idle", idle)
    this.graphics.add("walkingSide", walkingSide)
    this.graphics.add("walkingFront", walkingFront)
    this.graphics.add("walkingBack", walkingBack)
    this.graphics.use(idle);
    this.scale = new Vector(5.5, 5.5)

  }

  onInitialize(engine) {
    this.pant = new Actor()
    this.pant.graphics.use(Resources.PantsBlue.toSprite())
    this.pant.pos.y += 7
    this.addChild(this.pant)

    this.shirt = new Actor()
    this.shirt.graphics.use(Resources.ShirtRed.toSprite())
    this.addChild(this.shirt)
  }



  updateGraphics() {
    console.log("I received new bodyparts")
    console.log(this.scene.engine.bodyparts)
    this.pant.graphics.use(Resources.PantsBlue.toSprite())
    this.shirt.graphics.use(Resources.ShirtRed.toSprite())


  }


  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    this.graphics.use("idle")
    if (!this.inCutscene) {

    } else {

      if (engine.input.keyboard.isHeld(Keys.A)) {
        this.graphics.use("walkingSide")
        this.graphics.flipHorizontal = true
        xspeed = -300;
      }
      if (engine.input.keyboard.isHeld(Keys.D)) {
        xspeed = 300;
        this.graphics.use("walkingSide")
        this.graphics.flipHorizontal = false
      }
      if (engine.input.keyboard.isHeld(Keys.W)) {
        this.graphics.use("walkingBack")
        yspeed = -300;
      }
      if (engine.input.keyboard.isHeld(Keys.S)) {
        this.graphics.use("walkingFront")
        yspeed = 300;
      }
      this.vel = new Vector(xspeed, yspeed);
    }
  }
}
