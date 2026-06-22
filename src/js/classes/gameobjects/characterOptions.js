import { Actor, Keys, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from "../../resources";

export class CharacterOptions extends Actor {

    constructor(option, offset) {
        super({
            y: 100
        });

        const characterOptionSheet = SpriteSheet.fromImageSource({
            image: option,
            grid: { rows: 2, columns: 5, spriteWidth: 16, spriteHeight: 30 }
        })

        const idle = characterOptionSheet.sprites[5]
        const walkingSide = Animation.fromSpriteSheet(characterOptionSheet, range(6, 8), 150)
        const walkingFront = Animation.fromSpriteSheet(characterOptionSheet, range(0, 1), 150)
        const walkingBack = Animation.fromSpriteSheet(characterOptionSheet, range(3, 4), 150)
        this.graphics.add("idle", idle)
        this.graphics.add("walkingSide", walkingSide)
        this.graphics.add("walkingFront", walkingFront)
        this.graphics.add("walkingBack", walkingBack)
        this.graphics.use(idle);
        this.scale = new Vector(5.5, 5.5)

    }
}

