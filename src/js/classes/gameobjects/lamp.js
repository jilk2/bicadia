import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";

export class Lamp extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.Lamp.width, height: Resources.Lamp.height }) // collision box! 
        this.pos = new Vector(x, y)

    }

    onInitialize(engine) {
        this.graphics.use(Resources.Lamp.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(3.6, 3.6)
    }
}