import { Actor, CollisionType, Shape, SpriteSheet, Vector, Events } from "excalibur";
import { Resources } from "../../resources";
import { DialogueHandler } from "../dialogueHandler";
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
    // this.scale = new Vector(0.15, 0.15)
    this.interactable = true

    // this.events.on("collisionStart", this.defeat())
  }

  onInitialize(engine) {
    const scenePlayer = this.scene?.player;
    if (scenePlayer) {
      scenePlayer.graphics.use("walkingSide");
    }
    this.vel = new Vector(200, 0);
  }

  onCollisionStart(event) {
    if (event.other.owner instanceof Player) {
      console.log("interactable found")
    }
  }
  // defeat(engine){
  //     if(event.other.owner instanceof Player){
  //         Engine.goToScene("classroom")
  //     }
  // }

}