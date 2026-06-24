import { Actor, CollisionType, Shape, SpriteSheet, Vector, Events } from "excalibur";
import { Resources } from "../../resources";
import { Dialogue } from "../scenes/dialogue";
import { Player } from "./player";

export class Insecurity extends Actor {

  constructor(x, y) {

    const sprite = Resources.Silhouette.toSprite()

    super({
      x: x,
      y: y,
      collisionType: CollisionType.active,
      collider: Shape.Box(
        sprite.width * 0.5,
        sprite.height * 0.35,
        new Vector(0.5, -0.5)
      )
    })
    this.graphics.use(sprite)
    this.vel = new Vector(100, 0)
    this.scale = new Vector (6,6)
    this.interactable = false

    // this.events.on("collisionStart", this.defeat())
  }

    onPreUpdate(engine){
      const player = engine.currentScene.player
      if (player) {
        let direction = player.pos.sub(this.pos).normalize()
        let distance = Vector.distance(player.pos, this.pos)
        if (distance > 200){
          this.vel = direction.scale(500)
        } else if (distance <= 200){
          this.vel = direction.scale(200)
        }
      }
      
    }

 
}