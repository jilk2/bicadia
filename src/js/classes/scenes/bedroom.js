import { Actor, Engine, Scene} from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { InvisibleWall } from "../gameobjects/invisible-wall.js"
import { Player } from "../gameobjects/player.js";
import { Wardrobe } from "../gameobjects/wardrobe.js";
import { Bed } from "../gameobjects/bed.js";
import { Backpack } from "../gameobjects/backpack.js";
import { Door } from "../gameobjects/door.js"

export class Bedroom extends Scene {
  onInitialize(engine) {
    const background = new Background(Resources.Bedroom);
    this.add(background);

    //borders
    this.add(new InvisibleWall(0, 300, 10, 1000))      // links


    this.add(new Wardrobe(1000, 200))
    this.add(new Bed(715, 300))
    this.add(new Backpack(500, 500))
    this.add(new Door(470, 180))


    this.player = new Player(1000, 360)
    this.add(this.player)

  }
}
