import { Actor, Engine, Scene, Vector } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";
import { Bedroom } from "./bedroom.js";

export class CharacterCreation extends scene {
    onInitialize(engine) {
        const background = new Background(Resources.Bedroom);
        this.add(background);

        this.player = new Player(690, 360)
        this.add(this.player)

        this.player = new Vector(0, 0)
    }


}