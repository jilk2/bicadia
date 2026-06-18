import { Actor, Engine, Scene } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { InvisibleWall } from "../gameobjects/invisible-wall.js";
import { Player } from "../gameobjects/player.js";
import { Door } from "../gameobjects/door.js";
import { InteractableNpc } from "../gameobjects/interactable-npc.js";
import { ThinkBubble } from "../gameobjects/think-bubble.js";

export class Classroom extends Scene {
  onInitialize(engine) {
    const background = new Background(Resources.Classroom);
    this.add(background);

    //borders
    this.add(new InvisibleWall(0, 300, 10, 1000)); // links
    this.add(new InvisibleWall(1280, 300, 10, 1000)); // rechts
    this.add(new InvisibleWall(1280, 240, 150, 40)); // boven (rechts van deur)
    this.add(new InvisibleWall(0, 240, 2187, 40)); // boven (links van deur)
    this.add(new InvisibleWall(800, 730, 1900, 40)); // onder

    this.add(new Door(1150, 180, "bedroom"));
    this.thinkBubble = new ThinkBubble()
    this.add(this.thinkBubble);
    this.thinkBubble.loadNextGoal("I need to ask someone for a pen");

    this.player = new Player(690, 360);
    this.add(this.player);

    this.add(new InteractableNpc(600, 400));
  }
}
