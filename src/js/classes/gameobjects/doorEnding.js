import { CollisionType, Actor, Vector, Engine } from "excalibur";
import { Resources } from "../../resources";
import { Dialogue } from "../scenes/dialogue";

export class DoorEnding extends Actor {
  needInteractible;
  constructor(x, y, targetScene, interaction) {
    super({
      x,
      y,
      width: Resources.Door.width,
      height: Resources.Door.height - 30,
    }); // collision box!
    this.needInteractible = interaction;
    console.log(this.needInteractible);
    this.pos = new Vector(x, y);
    this.needsInteraction = interaction;
    this.interactable = true;
    this.needsInteraction = false;
    this.targetScene = targetScene;
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Door.toSprite());
    this.body.collisionType = CollisionType.Fixed;
    this.scale = new Vector(3.6, 3.6);
  }

  interaction(engine) {
    if (engine.pridePoints > engine.confidencePoints) {
      engine.remove("dialogue");
      this.dialogue = new Dialogue("queer_ending_0a");
      engine.addScene("dialogue", this.dialogue);
      engine.goToScene("dialogue");
    } else {
      engine.remove("dialogue");
      this.dialogue = new Dialogue("confidence_ending_0a");
      engine.addScene("dialogue", this.dialogue);
      engine.goToScene("dialogue");
    }
  }
}
