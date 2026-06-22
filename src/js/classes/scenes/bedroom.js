import { Actor, Engine, Scene } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { InvisibleWall } from "../gameobjects/invisible-wall.js"
import { Player } from "../gameobjects/player.js";
import { Wardrobe } from "../gameobjects/wardrobe.js";
import { Bed } from "../gameobjects/bed.js";
import { Backpack } from "../gameobjects/backpack.js";
import { Door } from "../gameobjects/door.js"
import { Plant } from "../gameobjects/plant.js";
import { Livingroom } from "./livingroom.js";
import { ThinkBubble } from "../gameobjects/think-bubble.js";
import { Desk } from "../gameobjects/desk.js";
import { Deskchair, DeskChair } from "../gameobjects/deskchair.js";

export class Bedroom extends Scene {
  onInitialize(engine) {
    const background = new Background(Resources.Bedroom);
    this.add(background);

    //borders
    this.add(new InvisibleWall(0, 300, 30, 1000))         // links
    this.add(new InvisibleWall(1280, 300, 30, 1000))      // rechts
    this.add(new InvisibleWall(1030, 220, 1020, 100))      // boven (rechts van deur)
    this.add(new InvisibleWall(0, 220, 840, 100))          // boven (rechts van deur)
    this.add(new InvisibleWall(800, 740, 1900, 80))      // onder

    //decoration
    this.add(new Wardrobe(1000, 200))
    this.add(new Bed(715, 300))
    this.add(new Backpack(500, 500))
    this.add(new Door(470, 180, "livingroom"))
    this.add(new Plant(1075, 120))
    this.add(new Desk(1230, 605))
    this.add(new Deskchair(1210, 630))
    this.thinkBubble = new ThinkBubble()
    this.add(this.thinkBubble)

    this.player = new Player(1000, 360)
    this.add(this.player)

  }
}
