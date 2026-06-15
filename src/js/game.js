import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Character } from './classes/character.js'
import { BackgroundClass } from './classes/backgrounds/backgroundclass.js'
import { Textbox } from './classes/textbox.js'
import { scene1Demo } from './classes/scenes/scene1demo.js'
import { scene2Demo } from './classes/scenes/scene2demo.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        this.addScene("demo1", new scene1Demo())
        this.addScene("demo2", new scene2Demo())
        this.goToScene("demo1")
    }
}

new Game()
