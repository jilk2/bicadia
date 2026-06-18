import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "../../resources";

export class ClassroomTable extends Actor{

    constructor(x, y) {
        super({ x, y, width: Resources.ClassroomTable.width / 3, height: Resources.ClassroomTable.height /3}) // collision box! 
        this.pos = new Vector(x,y)
        this.interactable = false

    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.ClassroomTable.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(0.15, 0.15)
    }

}