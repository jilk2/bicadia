import { Actor, Keys, Label, Vector } from "excalibur";
import { Resources } from "../../resources";

export class Pants extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.PantsBlue.toSprite())
        this.pos.y += 7
    }

    onInitialize(engine) {

    }

}