import { Actor, Color, Keys, Label, Vector } from "excalibur";
import { Resources } from "../../resources";

export class Shirt extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.ShirtRed.toSprite())
        // this.scale = new Vector(5.5, 5.5)

    }

    onInitialize(engine) {

    }

}