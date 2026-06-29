import { ScreenElement, Vector, Actor } from "excalibur";
import { Resources } from "../../resources";

export class ArrowRight extends Actor {

    index

    constructor(i) {
        super({
            width: Resources.ArrowRight.width * 2,
            height: Resources.ArrowRight.height * 2, 
        })
        this.index = i
        this.graphics.use(Resources.ArrowRight.toSprite())
        //  this.on("pointerdown", (event) => this.CharacterShirtAddIdHandler(event))
        this.on("pointerdown", (event) => this.scene.updateCharacter(this.index, 1))
        this.pos = new Vector(900, 240 + (i * 60))
    }
}