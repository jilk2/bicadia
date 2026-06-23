import { Actor, Color, Label, Vector, TextAlign, Font } from "excalibur";
import { Resources } from "../../resources";

export class ThinkBubble extends Actor {
  constructor(initialText = "") {
    super({ x: 1200, y: 50 });
    this.sprite = Resources.thinkBubble.toSprite();
    this.graphics.use(this.sprite);
    this.scale = new Vector(0.2, 0.2);
    // this.graphics.flipHorizontal = true;

    this.textLabel = new Label({
      color: Color.Black,
      x: -480,
      y: -15,
      text: "walk around using wasd",
      scale: new Vector(7, 7)
      // scale: new Vector(-5, -5),
    });
    this.addChild(this.textLabel);
  }

  loadNextGoal(dialogue) {
    this.textLabel.text = `${dialogue}`;
  }
}
