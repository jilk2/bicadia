import { Actor, Keys, Vector } from "excalibur"
import { Resources } from "../resources"

export class Character extends Actor{

    constructor(){
        super({width:Resources.Character.width, height:Resources.Character.height})

        this.sprite = Resources.Character.toSprite()
        this.graphics.use(this.sprite)

        this.pos = new Vector(300,300)
    }

    onPreUpdate(engine) {
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