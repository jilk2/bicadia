import {
  Actor,
  CollisionType,
  Shape,
  SpriteSheet,
  Vector,
  Engine,
  randomInRange,
} from "excalibur";
import { Resources } from "../../resources";
import { Dialogue } from "../scenes/dialogue";
import { ThinkBubble } from "./think-bubble";

export class InteractableNpc extends Actor {

  dialogue

  constructor(x, y, engine) {
    let sprite;
    if (engine.pronounce == "He") {
      sprite = Resources.Emiel.toSprite();
    } else if (engine.pronounce == "She") {
      sprite = Resources.Emily.toSprite();
    } else {
      if (randomInRange(0, 1) <= 0.5) {
        sprite = Resources.Emiel.toSprite();
      } else {
        sprite = Resources.Emily.toSprite();
      }
    }

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
    if (engine.firstimeTalking == false && engine.talkToTeacher == true) {
      engine.remove("dialogue");
      this.dialogue = new Dialogue("school_classroom_at_desk_0a");
      engine.addScene("dialogue", this.dialogue);// hoort in game.js
      engine.firstimeTalking = true;
      engine.goToScene("dialogue");
    } else if (engine.firstimeTalking == true && engine.talkedToEmielyAfterClass == false) {
      engine.remove("dialogue");
      this.dialogue = new Dialogue("school_classroom_after_class_0a");
      engine.addScene("dialogue", this.dialogue); // hoort in game.js
      engine.talkedToEmielyAfterClass = true
      engine.goToScene("dialogue");
    }
  }
}
