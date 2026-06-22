import { Actor, Engine, Scene } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { InvisibleWall } from "../gameobjects/invisible-wall.js"
import { Player } from "../gameobjects/player.js";
import { Door } from "../gameobjects/door.js"
import { TVKast } from "../gameobjects/tvkast.js";
import { Bank } from "../gameobjects/bank.js";
import { Doormat } from "../gameobjects/doormat.js";
import { Klok } from "../gameobjects/klok.js";
import { Lamp } from "../gameobjects/lamp.js";
import { Mat } from "../gameobjects/mat.js";
import { Sidebank } from "../gameobjects/sidebank.js";

export class Livingroom extends Scene {
    onInitialize(engine) {
        const background = new Background(Resources.Livingroom);
        this.add(background);

        //borders
        this.add(new InvisibleWall(-40, 300, 100, 1000))         // links
        this.add(new InvisibleWall(1300, 300, 100, 1000))      // rechts
        this.add(new InvisibleWall(1280, 210, 150, 100))      // boven (rechts van deur)
        this.add(new InvisibleWall(0, 210, 2187, 100))          // boven (links van deur)
        this.add(new InvisibleWall(800, 750, 1900, 100))      // onder



        this.add(new Door(1150, 180, "bedroom"))
        this.add(new TVKast(158, 250))
        this.add(new Bank(300, 467))
        this.add(new Doormat(1276, 645))
        this.add(new Klok(775, 90))
        this.add(new Lamp(1035, 205))
        this.add(new Mat(302, 600))
        this.add(new Sidebank(145, 600))






        this.player = new Player(690, 360)
        this.add(this.player)
    }
}
