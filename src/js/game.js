import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode, Keys } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bedroom } from "./classes/scenes/bedroom.js";
import { Livingroom } from "./classes/scenes/livingroom.js";
import { Dialogue } from "./classes/scenes/dialogue.js";
import { Classroom } from "./classes/scenes/classroom.js";
import { StartMenu } from "./classes/scenes/startmenu.js";
import { HowToPlay } from "./classes/scenes/howtoplay.js";
import { Minigame } from "./classes/scenes/minigame.js";

export class Game extends Engine {
  bravePoints = 0;
  constructor() {
    super({
      width: 1280,
      height: 720,
      maxFps: 60,
      displayMode: DisplayMode.FitScreen,
    });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {

    this.addScene("bedroom", new Bedroom());
    this.addScene("livingroom", new Livingroom());
    this.addScene("classroom", new Classroom());
    this.addScene("startmenu", new StartMenu());
    this.addScene("howtoplay", new HowToPlay())
    this.addScene("minigame", new Minigame())
    // this.addScene("livingroom", new Livingroom());
    // this.addScene("classroom", new Classroom());
    // this.goToScene("bedroom");
    this.goToScene("startmenu")
  }
}

new Game();
