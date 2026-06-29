import { Actor, Color, Label, Vector, Engine } from "excalibur";

export class Choices extends Actor {
  constructor(choices, onChoiceSelected, engine) {
    super({
      width: 1000,
      height: 120,
    });

    this.engine = engine;
    this.choices = choices;
    this.onChoiceSelected = onChoiceSelected;

    this.option1Label = new Label({
      text: choices[0].text,
      color: Color.White,
      x: 350,
      y: 200,
      maxWidth: 300,
      scale: new Vector(2, 2),
    });

    this.option2Label = new Label({
      text: choices[1].text,
      color: Color.White,
      x: 350,
      y: 250,
      maxWidth: 300,
      scale: new Vector(2, 2),

    });

    this.addChild(this.option1Label);
    this.addChild(this.option2Label);

    this.option1Label.on("pointerdown", () => this.choiceClickHandler(0));
    this.option2Label.on("pointerdown", () => this.choiceClickHandler(1));
  }

  choiceClickHandler(index, engine) {
    const choice = this.choices[index];

    if (index === 0) {
      this.engine.pridePoints += choice.PridePoints;
    } else {
      this.engine.confidencePoints += choice.ConfidencePoints;
    }

    this.onChoiceSelected(choice.link);
  }
}