import { Actor, CollisionType, Shape, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../../resources";
import { DialogueHandler } from "../dialogueHandler";

export class InteractableNpc extends Actor{

    constructor(x, y) {

        const sprite = Resources.Emiely.toSprite()

        super({
            x,
            y,
            collisionType: CollisionType.Fixed,
            collider: Shape.Box(
                sprite.width * 0.5,
                sprite.height * 0.35,
                new Vector(0.5, -0.5)
            )
        })
        this.graphics.use(sprite)
        this.scale = new Vector(0.15, 0.15)
        this.interactable = true

    }

    interaction(engine){
        //interaction begint en dialoog start
        DialogueHandler.activateHomeDialogue(engine, "EmielDialogueStart");
        
    }

}