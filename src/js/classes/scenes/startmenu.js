import { Color, Label, Scene, Vector } from "excalibur";
import { Resources } from "../../resources";
import { Background } from "../gameobjects/background";
import { Dialogue } from "../scenes/dialogue.js"

export class StartMenu extends Scene {
  onInitialize(engine) {
    const background = new Background(Resources.StartMenu);
    this.add(background);

    const gameStart = new Label({
      color: Color.Black,
      x: engine.drawWidth / 2 - 140,
      y: engine.drawHeight / 2 + 60,
      text: "Start Game",
      scale: new Vector(2.7, 2.7),
    });
    this.add(gameStart);
    gameStart.on("pointerdown", () => this.gameStartClickHandler(engine));
    const howToPlay = new Label({
      color: Color.Black,
      x: engine.drawWidth / 2 - 140,
      y: engine.drawHeight / 2 + 146,
      text: "How to Play",
      scale: new Vector(2.7, 2.7)
    });
    this.add(howToPlay);
    howToPlay.on("pointerdown", () => this.howToPlayClickHandler());
    const copyright = new Label({
      color: Color.White,
      x: 10,
      y: engine.drawHeight / 2 + 320,
      text: "© 2026, team 13",
      scale: new Vector(2, 2),
    });
    this.add(copyright);
  }

  gameStartClickHandler(engine) {
    engine.goToScene("creation")
  }
  howToPlayClickHandler() {
    this.engine.goToScene("howtoplay");
  }
}
