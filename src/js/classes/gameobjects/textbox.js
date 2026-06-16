import { Actor, Color, Keys, Label, Vector } from "excalibur";
import { Resources } from "../../resources";
import { Choices } from "./choices";

export class Textbox extends Actor{

    onInitialize(engine) {
        this.sprite = Resources.Textbox.toSprite()

        this.graphics.use(this.sprite)

        this.pos = new Vector(640, 650)

        const textLabel = new Label({
            color: Color.Black,
            x: -300,
            y: -50,
            text: `Hallo! Ik ben kirby hehet`,
            scale: new Vector(5,5)
        })
        this.addChild(textLabel)
        const continueLabel = new Label({
            color: Color.Black,
            text: `press space to continue`,
            x: 150,
            y: 30,
            scale: new Vector(2,2)
        })
        this.addChild(continueLabel)
    }

    onPreUpdate(engine){
        let choices = this.actors.filter(act => act instanceof Choices)
        if(engine.input.keyboard.wasPressed(Keys.Space) || choices.length === 0){
            // this.loadDialogue(this.currentDialogue.next)
            //dit is voor als we de json hebben met dialogue daarin
        }
    }
}