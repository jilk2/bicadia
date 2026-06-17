import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";

export class Backpack extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.Backpack.width, height: Resources.Backpack.height }) // collision box! 
        this.pos = new Vector(x,y)

    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Backpack.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(0.4 , 0.4)
    }
}