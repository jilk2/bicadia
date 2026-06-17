import { Actor, Engine, Scene, ScreenElement, Vector } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";
import { Bedroom } from "./bedroom.js";
import { Shirt } from "../gameobjects/shirt.js"
import { Pants } from "../gameobjects/pants.js";
import { ArrowLeft } from "../gameobjects/arrowLeft.js";
import { ArrowRight } from "../gameobjects/arrowRight.js";

export class CharacterCreation extends Scene {



    onInitialize(engine) {

        this.player = new Player(690, 360, false)
        this.add(this.player)


        // Creates and tags the arrows required for character creation. 
        for (let i = 0; i < 5; i++) {
            this.add(new ArrowLeft(i))
        }

        for (let i = 0; i < 5; i++) {
            this.add(new ArrowRight(i))

        }

    }

    updateCharacter(bodypart, direction) {
        // Updates the bodyparts array 
        // console.log(`bodypart ${bodypart} moet richting ${direction}`)
        this.engine.bodyparts[bodypart] = this.engine.bodyparts[bodypart] + direction
        this.player.updateGraphics()
        if (this.engine.bodyparts > [0, 3, 3, 2, 0]) {

            this.engine.bodyparts = [0, 0, 0, 0, 0]
            console.log("I reset the body parts")
        }
    }


}