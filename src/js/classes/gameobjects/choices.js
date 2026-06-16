import { Actor, Color, Label, Vector } from "excalibur";

export class Choices extends Actor{

    constructor(option1, option2){
        super()
        this.option1Label = new Label({
            color: Color.Black,
            x: -150,
            y: 30,
            maxWidth: 200,
            text: `${option1}`,
            scale: new Vector(2, 2)
        })

        this.option2Label = new Label({
            color: Color.Black,
            x: 250,
            y: 30,
            maxWidth: 200,
            text: `${option2}`,
            scale: new Vector(2, 2)
        })

        this.on("pointerdown", (event) => this.choiceClickHandler(event))
    }

    choiceClickHandler(event) {
        if (event.localPos.x < 0) {
            console.log("option 1 clicked")
        } else {
            console.log("option 2 clicked")
        }
    }
}