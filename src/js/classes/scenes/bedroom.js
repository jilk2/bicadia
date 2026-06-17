import { Actor, Engine, Scene} from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";
import { Wardrobe } from "../gameobjects/wardrobe.js";
import { Bed } from "../gameobjects/bed.js";

export class Bedroom extends Scene {
  onInitialize(engine) {
    const background = new Background(Resources.Bedroom);
    this.add(background);

    this.add(new Wardrobe(1000, 200))
    this.add(new Bed(715, 300))


    this.player = new Player(1000, 360)
    this.add(this.player)

  }
}
