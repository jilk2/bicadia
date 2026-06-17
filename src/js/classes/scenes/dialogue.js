import { Scene, Keys } from "excalibur";
import { Background } from "../gameobjects/background.js";
import { Textbox } from "../gameobjects/textbox.js";

export class Dialogue extends Scene {
  constructor(background, dialogueData, targetScene = null) {
    super();
    this.add(new Background(background));
    this.targetScene = targetScene;

    // normaliseer verschillende vormen naar an array of nodes { id?, line, ... }
    let nodes = [];
    if (Array.isArray(dialogueData)) {
      // array of nodes, or array with single keyed object
      if (dialogueData.length === 1 && dialogueData[0] && typeof dialogueData[0] === "object" && !dialogueData[0].id) {
        const obj = dialogueData[0];
        const keys = Object.keys(obj).sort();
        nodes = keys.map((k) => ({ id: k, ...obj[k] }));
      } else {
        nodes = dialogueData;
      }
    } else if (dialogueData && typeof dialogueData === "object") {
      nodes = dialogueData.id ? [dialogueData] : Object.keys(dialogueData).sort().map(k => ({ id: k, ...dialogueData[k] }));
    }

    this.nodes = nodes;
    this.currentIndex = 0;

    const startText = this.nodes[0]?.line || "";
    this.textbox = new Textbox(startText);
    this.add(this.textbox);
  }

  onPreUpdate(engine) {
    if (engine.input.keyboard.wasPressed(Keys.Space)) {
      this.currentIndex++;
      if (this.currentIndex < this.nodes.length) {
        this.textbox.loadNextDialogue(this.nodes[this.currentIndex].line);
      } else {
        if (this.targetScene) {
          engine.goToScene(this.targetScene);
        } else {
          console.log("Dialogue finished");
        }
      }
    }
  }
}