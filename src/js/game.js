import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode, Keys } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bedroom } from "./classes/scenes/bedroom.js";
import { CharacterCreation } from "./classes/scenes/characterCreation.js";

export class Game extends Engine {
  bodyparts
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
    // hair, face, shirt, pants, shoes
    this.bodyparts = [0, 0, 0, 0, 0]

    this.addScene("bedroom", new Bedroom());
    this.addScene("creation", new CharacterCreation());
    this.goToScene("creation");
  }
}

new Game();
