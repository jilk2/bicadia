import { Actor, Color, Label, Vector } from "excalibur";

export class Choices extends Actor {
  constructor(choices, onChoiceSelected) {
    super({ width: 1000, height: 120 });
    this.choices = choices;
    this.onChoiceSelected = onChoiceSelected;

    this.option1Label = new Label({
      color: Color.Black,
      x: -150,
      y: 30,
      maxWidth: 200,
      text: choices[0].text,
      scale: new Vector(2, 2),
    });

    this.option2Label = new Label({
      color: Color.Black,
      x: 250,
      y: 30,
      maxWidth: 200,
      text: choices[1].text,
      scale: new Vector(2, 2),
    });

    this.addChild(this.option1Label);
    this.addChild(this.option2Label);
    this.on("pointerdown", (event) => this.choiceClickHandler(event));
  }

  choiceClickHandler(event) {
    this.onChoiceSelected(this.choices[0].link);
    this.onChoiceSelected(this.choices[1].link);
  }
}
