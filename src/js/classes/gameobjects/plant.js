import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";

export class Plant extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.Plant.width, height: Resources.Plant.height }) // collision box! 
        this.pos = new Vector(x,y)
        this.interactable = true

    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Plant.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(0.125 , 0.125)
    }
}