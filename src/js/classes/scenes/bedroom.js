import { Actor, Engine, Scene} from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";
import { Wardrobe } from "../gameobjects/wardrobe.js";

export class Bedroom extends Scene {
  onInitialize(engine) {
    const background = new Background(Resources.Bedroom);
    this.add(background);

    this.add(new Wardrobe(1000, 250))

    this.player = new Player(690, 360)
    this.add(this.player)

   
    

  }
}
