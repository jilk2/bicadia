import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";

export class Door extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.Door.width, height: Resources.Door.height - 30 }) // collision box! 
        this.pos = new Vector(x, y)

    }

    onInitialize(engine) {
        this.graphics.use(Resources.Door.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(3.6, 3.6)
    }
}