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
    this.needsInteraction = false
  }

  onInitialize(engine) {
    this.graphics.use(Resources.ConfidenceOrb.toSprite());
    this.body.collisionType = CollisionType.Passive;
    this.scale = new Vector(0.024, 0.024);
  }

  interaction(engine) {
    this.kill();
    engine.currentScene.updateScore(engine);
  }
}