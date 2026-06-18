import { Scene, Keys } from "excalibur";
import { Background } from "../gameobjects/background.js";
import { Textbox } from "../gameobjects/textbox.js";

export class Dialogue extends Scene {
  constructor(background) {
    super();
    this.add(new Background(background));
  }

  placeDialogue(char, line) {
    this.textbox = new Textbox(line);
    this.add(this.textbox);
  }

  // onPreUpdate(engine) {
  //   if (engine.input.keyboard.wasPressed(Keys.Space)) {
  //     this.currentIndex++;
  //     if (this.currentIndex < this.nodes.length) {
  //       this.textbox.loadNextDialogue(this.nodes[this.currentIndex].line);
  //     } else {
  //       if (this.targetScene) {
  //         engine.goToScene(this.targetScene);
  //       } else {
  //         console.log("Dialogue finished");
  //       }
  //     }
  //   }
  // }
}
