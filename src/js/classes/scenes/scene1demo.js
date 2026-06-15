import { Keys, Scene, Vector } from "excalibur";
import { BackgroundClass } from "../backgrounds/backgroundclass";
import { Character } from "../character";
import { Textbox } from "../textbox";

export class scene1Demo extends Scene{
    
    onInitialize(){
        const backgroundclass = new BackgroundClass()
        this.add(backgroundclass)
        const character = new Character(new Vector(1,1), new Vector(300, 400), false)
        this.add(character)
        const textbox = new Textbox()
        this.add(textbox)
    }

    onPreUpdate(engine){
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
               this.engine.goToScene("demo2")
        }
    }
}
