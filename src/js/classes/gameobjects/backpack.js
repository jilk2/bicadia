import { CollisionType, Actor, Vector } from "excalibur";
import { Resources } from "../../resources";
import { Player } from "./player";
import { Dialogue } from "../scenes/dialogue";
import { ThinkBubble } from "./think-bubble";

export class Backpack extends Actor {
  constructor(x, y) {
    super({
      x,
      y,
      width: Resources.Backpack.width,
      height: Resources.Backpack.height,
    }); // collision box!
    this.pos = new Vector(x, y);
    this.interactable = true;
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Backpack.toSprite());
    this.body.collisionType = CollisionType.Fixed;
    this.scale = new Vector(0.125, 0.125);
  }

  interaction(engine) {
    this.kill();
    engine.remove("dialogue");
    this.dialogue = new Dialogue("bedroom_backpack_1");
    engine.addScene("dialogue", this.dialogue);
    engine.goToScene("dialogue")
  }
}
