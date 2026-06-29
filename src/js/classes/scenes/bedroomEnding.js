import { Actor, Engine, Scene, Vector } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { InvisibleWall } from "../gameobjects/invisible-wall.js";
import { Player } from "../gameobjects/player.js";
import { Wardrobe } from "../gameobjects/wardrobe.js";
import { Bed } from "../gameobjects/bed.js";
import { Backpack } from "../gameobjects/backpack.js";
import { Door } from "../gameobjects/door.js";
import { Plant } from "../gameobjects/plant.js";
import { Livingroom } from "./livingroom.js";
import { ThinkBubble } from "../gameobjects/think-bubble.js";
import { Desk } from "../gameobjects/desk.js";
import { Deskchair } from "../gameobjects/deskchair.js";
import { Dialogue } from "./dialogue.js";
export class BedroomEnding extends Scene {
  onInitialize(engine) {
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
