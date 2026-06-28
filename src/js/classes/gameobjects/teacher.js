import { Actor, CollisionType, Shape, Vector } from "excalibur";
import { Dialogue } from "../scenes/dialogue";
import { Resources } from "../../resources";

export class Teacher extends Actor {

    constructor(x, y) {

        const sprite = Resources.Teacher.toSprite()

        super({
            x,
            y,
            collisionType: CollisionType.Fixed,
            collider: Shape.Box(
                sprite.width * 0.5,
                sprite.height * 0.35,
                new Vector(0.5, -0.35)
            )
        })
        this.graphics.use(sprite)
        this.scale = new Vector(0.2, 0.2)
        this.interactable = true

    }

    interaction(engine) {
        //jurgen

        // If player interacts with teacher play dialog
        // Remove previous dialog
        // Add new dialog
        // Add dialog to scene
        // Go to dialog scene
        // Ensure player cannot talk to teacher again.
        if(!engine.talkToTeacher){
        engine.remove("dialogue");
        this.dialogue = new Dialogue("school_classroom_teacher_0a");
        engine.addScene("dialogue", this.dialogue);
        engine.goToScene("dialogue")
        engine.talkToTeacher = true
        }
    }
}