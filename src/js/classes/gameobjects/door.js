import { CollisionType, Actor, Vector } from "excalibur";
import { Resources } from "../../resources";

export class Door extends Actor {
  constructor(x, y, targetScene) {
    super({
      x,
      y,
      width: Resources.Door.width,
      height: Resources.Door.height - 30,
    }); // collision box!
    this.pos = new Vector(x, y);
    this.interactable = true;
    this.targetScene = targetScene;
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Door.toSprite());
    this.body.collisionType = CollisionType.Fixed;
    this.scale = new Vector(3.6, 3.6);
  }

  interaction(engine) {
    engine.goToScene(engine.goToScene(this.targetScene));
  }

  firstSchool(engine) {
        // DialogueHandler.activateschoolBeginningDialogue(engine, "enterSchool");
  }
}
