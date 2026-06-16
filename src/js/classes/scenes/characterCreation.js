import { Actor, Engine, Scene } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";

export class CharacterCreation extends scene {
    onInitialize(engine) {
        const background = new Background()

        this.player = new Player()
        this.add(this.player)
    }


}