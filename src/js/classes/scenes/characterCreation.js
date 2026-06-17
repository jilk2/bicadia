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

        // hair, face, shirt, pants, shoes
        // this.bodyparts = [0, 0, 0, 0, 0]

        this.player = new Player(690, 360, false)
        this.add(this.player)



        for (let i = 0; i < 5; i++) {
            this.add(new ArrowLeft(i))
        }

        for (let i = 0; i < 5; i++) {
            this.add(new ArrowRight(i))

        }


        //hier maak je de screenelement aan
        //die plaats je aan de kanten van de player
        //terwijl je die aan maakt 
        //geef jij er een pointer event aan die dan naar die functie toe gaat om +1 of -1 

    }

    updateCharacter(bodypart, direction) {
        // console.log(`bodypart ${bodypart} moet richting ${direction}`)
        this.engine.bodyparts[bodypart] = this.engine.bodyparts[bodypart] + direction
        this.player.updateGraphics()

    }


}