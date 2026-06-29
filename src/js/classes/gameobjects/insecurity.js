import { Actor, CollisionType, Shape, SpriteSheet, Vector, Events } from "excalibur";
import { Resources } from "../../resources";
import { Dialogue } from "../scenes/dialogue";
import { Player } from "./player";

export class Insecurity extends Actor {

  constructor(x, y, targetScene) {

    const sprite = Resources.Silhouette.toSprite()

    super({
      x: x,
      y: y,
      collisionType: CollisionType.active,
      collider: Shape.Box(
        sprite.width * 0.45,
        sprite.height * 0.32,
        new Vector(0.5, 0.7)
      )
    })
    this.graphics.use(sprite)
    this.vel = new Vector(100, 0)
    this.scale = new Vector(6, 6)
    this.interactable = false

    this.on('collisionstart', (event) => this.defeat(event))
  }

  defeat(event) {
    if (event.other.owner instanceof Player) {
      event.other.owner.kill()
      this.scene.player = null;
      this.scene.engine.goToScene(targetScene)
    }
  }

  onPreUpdate(engine) {
    const player = this.scene.player
    if (player) {
      let direction = player.pos.sub(this.pos).normalize()
      let distance = Vector.distance(player.pos, this.pos)
      if (distance > 200) {
        this.vel = direction.scale(500)
      } else if (distance <= 200) {
        this.vel = direction.scale(200)
      }
    }

  }

}