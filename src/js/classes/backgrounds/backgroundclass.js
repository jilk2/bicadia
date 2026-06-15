import { Actor, Vector } from "excalibur";
import { Resources } from "../../resources";

export class BackgroundClass extends Actor{

    onInitialize(engine) {
        this.sprite = Resources.BackgroundClass.toSprite()

        this.sprite.offset = new Vector(0,0)

        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }
}