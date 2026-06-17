import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";

export class TVKast extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.TVKast.width, height: Resources.TVKast.height }) // collision box! 
        this.pos = new Vector(x, y)

    }

    onInitialize(engine) {
        this.graphics.use(Resources.TVKast.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(3.6, 3.6)
    }
}