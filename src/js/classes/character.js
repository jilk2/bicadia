import { Actor, Keys, Vector } from "excalibur"
import { Resources } from "../resources"

export class Character extends Actor{

    constructor(scale, pos, canMove){
        super({width:Resources.Character.width, height:Resources.Character.height})

        this.scale = scale
        this.pos = pos
        this.canMove = canMove

        this.sprite = Resources.Character.toSprite()
        this.graphics.use(this.sprite)
    }

    onPreUpdate(engine) {

        if (!this.canMove){
            this.vel = new Vector(0,0)
            return
        }

        let xspeed = 0
        let yspeed = 0
        if (engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -300
        }
        if (engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = 300
        }
        if (engine.input.keyboard.isHeld(Keys.W)) {
            yspeed = -300
        }
        if (engine.input.keyboard.isHeld(Keys.S)) {
            yspeed = 300
        }
        this.vel = new Vector(xspeed, yspeed)
    }
    
    
}