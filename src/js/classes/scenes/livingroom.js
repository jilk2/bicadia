import { Actor, Engine, Scene } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";
import { Door } from "../gameobjects/door.js"
import { TVKast } from "../gameobjects/tvkast.js";

export class Livingroom extends Scene {
    onInitialize(engine) {
        const background = new Background(Resources.Livingroom);
        this.add(background);

        this.add(new Door(1150, 180))
        this.add(new TVKast(200, 180))

        this.player = new Player(690, 360)
        this.add(this.player)
    }
}
