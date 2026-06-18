import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode, Keys } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bedroom } from "./classes/scenes/bedroom.js";
import { Livingroom } from "./classes/scenes/livingroom.js";
import { Dialogue } from "./classes/scenes/dialogue.js";
import { Classroom } from "./classes/scenes/classroom.js";
import { DialogueHandler } from "./classes/dialogueHandler.js";
import jsonData from "./data/dialogue.json";

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

    // this.addScene("bedroom", new Bedroom());
    // this.addScene("livingroom", new Livingroom());
    // this.addScene("classroom", new Classroom());
    DialogueHandler.getDialogue();
    // this.goToScene("bedroom");
  }
}

new Game();
