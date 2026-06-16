import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode, Keys } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bedroom } from "./classes/scenes/bedroom.js";

export class Game extends Engine {
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
    this.goToScene("bedroom");
  }
}

new Game();
