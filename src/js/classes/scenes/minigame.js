import { Actor, Engine, Scene } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { InvisibleWall } from "../gameobjects/invisible-wall.js"
import { Player } from "../gameobjects/player.js";
import { Door } from "../gameobjects/door.js"
import { TVKast } from "../gameobjects/tvkast.js";
import { Insecurity } from "../gameobjects/insecurity.js";

export class Minigame extends Scene {
    onInitialize(engine) {
        const background = new Background(Resources.Livingroom);
        this.add(background);

        //borders
        this.add(new InvisibleWall(1280, 210, 150, 100))      // boven (rechts van deur)
        this.add(new InvisibleWall(0, 210, 2187, 100))          // boven (links van deur)
        this.add(new InvisibleWall(800, 750, 1900, 100))      // onder




        this.player = new Player(690, 360)
        this.add(this.player)

        this.insecurity = new Insecurity(0, 360)
        this.add(this.insecurity)
    }
}
