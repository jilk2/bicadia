import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";

export class Sidebank extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.Sidebank.width, height: Resources.Sidebank.height }) // collision box! 
        this.pos = new Vector(x, y)

    }

    onInitialize(engine) {
        this.graphics.use(Resources.Sidebank.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(3.6, 3.6)
    }
}