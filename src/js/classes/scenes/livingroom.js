import { Actor, Engine, Scene } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";

export class Livingroom extends Scene {
    onInitialize(engine) {
        const background = new Background(Resources.Livingroom);
        this.add(background);

        this.player = new Player(690, 360)
        this.add(this.player)
    }
}
