import { Actor, Color, Engine, Label, Scene, Vector } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { InvisibleWall } from "../gameobjects/invisible-wall.js"
import { Player } from "../gameobjects/player.js";
import { Insecurity } from "../gameobjects/insecurity.js";
import { ConfidenceOrb } from "../gameobjects/confidence-orb.js";

export class Minigame extends Scene {
    onInitialize(engine) {
        this.createScene()
    }

    onActivate(engine) {
        this.resetScene()
    }

    createScene() {
        const background = new Background(Resources.MiniGame)
        this.add(background)

        this.add(new InvisibleWall(-40, 300, 100, 1000))
        this.add(new InvisibleWall(1300, 300, 100, 1000))
        this.add(new InvisibleWall(1280, 10, 2560, 260))
        this.add(new InvisibleWall(800, 750, 1900, 100))

        this.score = 0
        this.scoreLabel = new Label({
            color: Color.White,
            text: `Confidence: ${this.score}/20`,
            scale: new Vector(5, 5)
        })
        this.add(this.scoreLabel)

        this.orbs = []
        this.spawnOrbs()

        this.player = new Player(690, 360)
        this.add(this.player)

        this.insecurity = new Insecurity(0, 360)
        this.add(this.insecurity)
    }

    spawnOrbs() {
        for (let i = 0; i < 40; i++) {
            const orb = new ConfidenceOrb(Math.random() * 1220 + 20, Math.random() * 540 + 150)
            this.orbs.push(orb)
            this.add(orb)
        }
    }

    resetScene() {
        this.score = 0
        this.scoreLabel.text = `Confidence: ${this.score}/20`

        for (const orb of this.orbs) {
            orb.kill()
        }
        this.orbs = []
        this.spawnOrbs()

        if (!this.player) {
            this.player = new Player(690, 360)
            this.add(this.player)
        } else {
            this.player.pos = new Vector(690, 360)
            this.player.vel = new Vector(0, 0)
        }

        this.insecurity.pos = new Vector(0, 360)
    }

    updateScore(engine) {
        this.score++
        this.scoreLabel.text = `Confidence: ${this.score}/20`

        if (this.score >= 20) {
            engine.goToScene("classroom")
        }
    }

}
