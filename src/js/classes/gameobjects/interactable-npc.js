import { Actor, CollisionType, Shape, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../../resources";

export class InteractableNpc extends Actor{

    constructor(x, y) {

        super({ 
            x, 
            y,
            collisionType: CollisionType.Fixed,
            collider: Shape.Box(16, 10, new Vector(0.5, -0.45))
        })

        const playersheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSheet,
            grid: { rows: 2, columns: 5, spriteWidth: 16, spriteHeight: 30 },
        })

        this.graphics.use(playersheet.sprites[5])
        this.scale = new Vector(5.5, 5.5)
        this.interactable = true

    }

    interaction(engine){
        //interaction begint en dialoog start
        this.kill()
        
    }


}