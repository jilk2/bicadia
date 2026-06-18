import { Actor, CollisionType, Shape, Vector } from "excalibur";
import { Resources } from "../../resources";

export class Silhouette extends Actor{

    constructor(x, y) {

        super({ 
            x, 
            y,
            collisionType: CollisionType.Fixed,
            collider: Shape.Box(16, 10, new Vector(0.5, -0.45))
        })

        this.graphics.use(Resources.Silhouette.toSprite());

        this.scale = new Vector(5.5, 5.5)
        this.interactable = false

    }
}