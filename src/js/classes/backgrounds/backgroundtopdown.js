import { Actor, Vector } from "excalibur";
import { Resources } from "../../resources";

export class BackgroundTopDown extends Actor{

    onInitialize(engine) {
        this.sprite = Resources.BackgroundTopDown.toSprite()

        this.sprite.offset = new Vector(0,0)

        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }
}