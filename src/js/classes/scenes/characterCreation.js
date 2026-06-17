import { Actor, Engine, Scene, Vector } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";
import { Bedroom } from "./bedroom.js";

export class CharacterCreation extends Scene {
    onInitialize(engine) {
        // const background = new Background(Resources.Bedroom);
        // this.add(background);

        this.player = new Player(690, 360, false)
        this.add(this.player)


    }


}