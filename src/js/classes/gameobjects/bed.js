import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";

export class Bed extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.Bed.width, height: Resources.Bed.height }) // collision box! 
        this.pos = new Vector(x,y)

    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Bed.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(3.6 , 3.6)
    }
}