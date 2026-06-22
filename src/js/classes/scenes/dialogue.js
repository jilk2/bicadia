import { Actor, Color, Label, Vector, Scene, Font, FontUnit } from "excalibur";
import { Resources } from "../../resources";
import dialogueData from "../../data/dialogue.json";

export class Dialogue extends Scene {
  dialogue;
  constructor(scene) {
    super();
    this.questionLabel = new Label({
      color: Color.Black,
      x: 525,
      y: 600,
      scale: new Vector(2.5, 2.5),
    });

    this.continueLabel = new Label({
      color: Color.Black,
      text: `press space to continue`,
      x: 590,
      y: 675,
      scale: new Vector(1.5, 1.5),
    });
    this.dialogue = scene;
  }

  onInitialize(engine) {
    const bg = new Actor({
      pos: new Vector(675, 600),
      width: 600,
      height: 120,
    });
    bg.graphics.use(Resources.Textbox.toSprite());
    bg.z = -1
    this.add(bg);
    
    this.add(this.questionLabel);
    this.add(this.continueLabel)
    this.showQuestion(this.dialogue);
  }

  showQuestion(id) {
    const dialog = dialogueData.find((d) => d.id === id);
    this.questionLabel.text = dialog.question;
  }
}
