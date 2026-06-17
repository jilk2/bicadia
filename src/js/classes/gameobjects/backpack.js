import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";
import { Player } from './player';

export class Backpack extends Actor {

    constructor(x, y) {
        super({ x, y, width: Resources.Backpack.width, height: Resources.Backpack.height }) // collision box! 
        this.pos = new Vector(x,y)
        this.interactable = true

    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Backpack.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(0.125 , 0.125)
    }


    
}