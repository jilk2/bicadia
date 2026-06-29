import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from "../../resources";
import { Dialogue } from "../scenes/dialogue";
import { ThinkBubble } from "./think-bubble";

export class Doormat extends Actor {

    constructor(x, y, targetScene) {
        super({ x, y, width: Resources.DoorMat.width, height: Resources.DoorMat.height }) // collision box! 
        this.pos = new Vector(x, y)
        this.targetScene = targetScene;
        this.interactable = true;
        this.needsInteraction = false
    }

    onInitialize(engine) {
        this.graphics.use(Resources.DoorMat.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(3.6, 3.6)
    }

    interaction(engine) {
        engine.goToScene(engine.goToScene(this.targetScene));
        engine.remove("dialogue");
        this.dialogue = new Dialogue("livingroom_doormat_0a");
        engine.addScene("dialogue", this.dialogue);
        engine.goToScene("dialogue")
    }

} 