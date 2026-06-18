import { Actor, Color, Label, Vector } from "excalibur";
import { Resources } from "../../resources";

export class Textbox extends Actor {
  constructor(initialText = "") {
    super({ x: 640, y: 650 });
    this.sprite = Resources.Textbox.toSprite();
    this.graphics.use(this.sprite);

    this.textLabel = new Label({
      color: Color.Black,
      x: -300,
      y: -50,
      text: initialText,
      scale: new Vector(2,2),
    });
    this.addChild(this.textLabel);

    this.continueLabel = new Label({
      color: Color.Black,
      text: `press space to continue`,
      x: 150,
      y: 30,
      scale: new Vector(2, 2),
    });
    this.addChild(this.continueLabel);
  }

  loadNextDialogue(dialogue) {
    this.textLabel.text = `${dialogue}`;
  }
}