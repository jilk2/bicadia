import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "../../resources";

export class ConfidenceOrb extends Actor {
  constructor(x, y) {
    super({
      x,
      y,
      width: Resources.ConfidenceOrb.width,
      height: Resources.ConfidenceOrb.height,
    });
    this.pos = new Vector(x, y);
    this.interactable = true;
  }

  onInitialize(engine) {
    this.graphics.use(Resources.ConfidenceOrb.toSprite());
    this.body.collisionType = CollisionType.Fixed;
    this.scale = new Vector(0.028, 0.028);
  }

  interaction(engine) {
    this.kill();
  }
}