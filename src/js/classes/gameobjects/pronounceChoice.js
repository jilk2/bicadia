import { Actor, Color, Engine, Label, Vector } from "excalibur";
import { Resources } from "../../resources";
import { Dialogue } from "../scenes/dialogue";

export class Pronounce extends Actor {
  constructor(engine) {
    super({ x: 800, y: 650 });
    // this.sprite = Resources.Textbox.toSprite();
    // this.graphics.use(this.sprite);
    this.dialogue = new Dialogue("bedroom_backpack_0a");
    engine.addScene("dialogue", this.dialogue);
    this.pronounceOne = new Label({
      color: Color.Black,
      x: -300,
      y: -50,
      text: "He/Him",
      scale: new Vector(2, 2),
    });

    this.addChild(this.pronounceOne);
    this.pronounceOne.on("pointerdown", () => {
      engine.pronounce = "He";
      console.log(engine.pronounce);
      engine.goToScene("dialogue");
    });

    this.pronounceTwo = new Label({
      color: Color.Black,
      x: -150,
      y: -50,
      text: "She/Her",
      scale: new Vector(2, 2),
    });
    this.addChild(this.pronounceTwo);
    this.pronounceTwo.on("pointerdown", () => {
      engine.Pronounce = "She";
      engine.pronounce;
      engine.goToScene("dialogue");
    });

    this.pronounceThree = new Label({
      color: Color.Black,
      x: 0,
      y: -50,
      text: "They/Them",
      scale: new Vector(2, 2),
    });
    this.addChild(this.pronounceThree);
    this.pronounceThree.on("pointerdown", () => {
      engine.pronounce = "they";
      engine.pronounce;
      engine.goToScene("dialogue");
    });
  }
}
