import { Actor, Engine, Scene, Vector } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { InvisibleWall } from "../gameobjects/invisible-wall.js"
import { Player } from "../gameobjects/player.js";
import { Door } from "../gameobjects/door.js"
import { TVKast } from "../gameobjects/tvkast.js";
import { Insecurity } from "../gameobjects/insecurity.js";
import { ConfidenceOrb } from "../gameobjects/confidence-orb.js";

export class Minigame extends Scene {
    onInitialize(engine) {
        const background = new Background(Resources.MiniGame);
        this.add(background);

        //borders
        this.add(new InvisibleWall(-40, 300, 100, 1000))      // links
        this.add(new InvisibleWall(1300, 300, 100, 1000))     // rechts
        this.add(new InvisibleWall(1280, 10, 2560, 260))      // boven
        this.add(new InvisibleWall(800, 750, 1900, 100))      // onder

        for (let i = 0; i < 20; i++) {
            7
            this.confidenceOrb = new ConfidenceOrb(Math.random() * 1200 + 40, Math.random() * 500 + 200)
            this.add(this.confidenceOrb)
        }


        this.player = new Player(690, 360)
        this.add(this.player)

        this.insecurity = new Insecurity(0, 360)
        this.add(this.insecurity)
    }
}
