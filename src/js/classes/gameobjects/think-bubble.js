import { Actor, Color, Label, Vector, TextAlign, Font } from "excalibur";
import { Resources } from "../../resources";

export class ThinkBubble extends Actor {
  constructor(initialText = "") {
    super({ x: 1150, y: 50 });
    this.sprite = Resources.thinkBubble.toSprite();
    this.graphics.use(this.sprite);
    this.scale = new Vector(1, 1);
    this.graphics.flipHorizontal = true;

    this.textLabel = new Label({
      color: Color.Black,
      x: -80,
      y: -15,
      text: "i need to find my backpack",
      scale: new Vector(1.3, 1.5)
      // scale: new Vector(-5, -5),
    });
    this.addChild(this.textLabel);
  }

  loadNextGoal(dialogue) {
    this.textLabel.text = `${dialogue}`;
  }
}
