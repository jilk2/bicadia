import { Actor, Engine, Scene, ScreenElement, Vector } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";
import { Bedroom } from "./bedroom.js";
import { Shirt } from "../gameobjects/shirt.js"
import { Pants } from "../gameobjects/pants.js";

export class CharacterCreation extends Scene {
    onInitialize(engine) {

        this.player = new Player(690, 360, false)
        this.add(this.player)

        this.pant = new Pants()
        this.player.addChild(this.pant)

        this.shirt = new Shirt()
        this.player.addChild(this.shirt)


        //hier maak je de screenelement aan
        //die plaats je aan de kanten van de player
        //terwijl je die aan maakt 
        //geef jij er een pointer event aan die dan naar die functie toe gaat om +1 of -1 
        export class ScreenElement extends Actor {


        }


    }


}