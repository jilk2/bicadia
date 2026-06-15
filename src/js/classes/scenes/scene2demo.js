import { Scene, Vector } from "excalibur";
import { BackgroundTopDown } from "../backgrounds/backgroundtopdown";
import { Character } from "../character";

export class scene2Demo extends Scene{

    onInitialize(){
        const backgroundclass = new BackgroundTopDown()
        this.add(backgroundclass)
        const character = new Character(new Vector(0.4, 0.4), new Vector(300, 550), true)
        this.add(character)
    }
}