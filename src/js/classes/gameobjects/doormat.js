import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";

export class Doormat extends Actor {

    constructor(x, y, targetScene) {
        super({ x, y, width: Resources.DoorMat.width, height: Resources.DoorMat.height }) // collision box! 
        this.pos = new Vector(x, y)
        this.targetScene = targetScene;
        this.interactable = true;
    }

    onInitialize(engine) {
        this.graphics.use(Resources.DoorMat.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(3.6, 3.6)
    }

    interaction(engine) {
        engine.goToScene(engine.goToScene(this.targetScene));
    }
    
}