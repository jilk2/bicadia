import { ScreenElement, Vector, Actor } from "excalibur";
import { Resources } from "../../resources";

export class ArrowLeft extends Actor {

    index

    constructor(i) {
        super({
            width: Resources.ArrowLeft.width * 2,
            height: Resources.ArrowLeft.height * 2, 
        })
        this.index = i
        this.graphics.use(Resources.ArrowLeft.toSprite())
        //  this.on("pointerdown", (event) => this.CharacterShirtAddIdHandler(event))
        this.on("pointerdown", (event) => this.scene.updateCharacter(this.index, -1))
        this.pos = new Vector(500, 240 + (i * 60))

    }
}