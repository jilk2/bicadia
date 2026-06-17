import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";

export class Wardrobe extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.Wardrobe.width, height: Resources.Wardrobe.height }) // collision box! 
        this.pos = new Vector(x,y)
        this.interactable = true

    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Wardrobe.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(3.7 , 3.7)
    }
}