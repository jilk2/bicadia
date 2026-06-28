import { Actor, CollisionType, Shape, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../../resources";
import { Dialogue } from "../scenes/dialogue";
import { ThinkBubble } from "./think-bubble";

export class InteractableNpc extends Actor {
  constructor(x, y) {
    const sprite = Resources.Emiely.toSprite();

    super({
      x,
      y,
      collisionType: CollisionType.Fixed,
      collider: Shape.Box(
        sprite.width * 0.5,
        sprite.height * 0.35,
        new Vector(0.5, -0.5),
      ),
    });
    this.graphics.use(sprite);
    this.scale = new Vector(0.15, 0.15);
    this.interactable = true;
    this.needsInteraction = true;
  }

  interaction(engine) {
    engine.remove("dialogue");
    this.dialogue = new Dialogue("school_classroom_npc_0a");
    engine.addScene("dialogue", this.dialogue);
    engine.goToScene("dialogue");
  }
}
