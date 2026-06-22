import { Color, Label, Scene, Vector } from "excalibur";

export class HowToPlay extends Scene{
    onInitialize(){
        const placeholder = new Label({
            color: Color.Black,
            x: 640,
            y: 360,
            text: "Instructions to be added",
            scale: new Vector(3,3)
        })
        this.add(placeholder)
    }
}