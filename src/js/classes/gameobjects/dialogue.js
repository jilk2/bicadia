import { Actor, Color, Label } from "excalibur";

export class Dialogue extends Actor{

    constructor(text){
        super()
        const dialogueLabel = new Label({
            color: Color.Black,
            x: -300,
            y: -50,
            maxWidth: 500,
            text: `${text}`,
            scale: new Vector(3,3)
            //specific settings may need some tweaking but will test that later
        })
    }
}