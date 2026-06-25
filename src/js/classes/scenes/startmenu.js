import { Axes, Buttons, Color, Label, Scene, Vector } from "excalibur";
import { Resources } from "../../resources";
import { Background } from "../gameobjects/background";
import { Dialogue } from "../scenes/dialogue.js"

export class StartMenu extends Scene {
  onInitialize(engine) {
    const background = new Background(Resources.StartMenu)
    this.add(background)

    this.options = []

    const gameStart = new Label({
      color: Color.Black,
      x: engine.drawWidth / 2 - 140,
      y: engine.drawHeight / 2 + 60,
      text: "Start Game",
      scale: new Vector(2.7, 2.7),
    })
    this.add(gameStart)
    this.options.push(gameStart)
    gameStart.on("pointerdown", () => this.gameStartClickHandler(engine))

    const howToPlay = new Label({
      color: Color.Black,
      x: engine.drawWidth / 2 - 140,
      y: engine.drawHeight / 2 + 146,
      text: "How to Play",
      scale: new Vector(2.7, 2.7)
    })
    this.add(howToPlay)
    this.options.push(howToPlay)
    howToPlay.on("pointerdown", () => this.howToPlayClickHandler())

    const copyright = new Label({
      color: Color.White,
      x: 10,
      y: engine.drawHeight / 2 + 320,
      text: "© 2026, team 13",
      scale: new Vector(2, 2),
    });
    this.add(copyright)

    this.cursor = new Label({
      color: Color.Black,
      text: ">",
      x: gameStart.pos.x - 40,
      y: gameStart.pos.y,
      scale: new Vector(2.7, 2.7),
    })
    this.add(this.cursor)

    this.selectedIndex = 0
  }

  gameStartClickHandler(engine) {
    engine.goToScene("creation")
  }
  howToPlayClickHandler() {
    this.engine.goToScene("howtoplay")
  }

  activateSelection(engine) {
    if (this.selectedIndex === 0) {
      engine.goToScene("creation")
    }

    if (this.selectedIndex === 1) {
      engine.goToScene("howtoplay")
    }
  }

  onPreUpdate(engine) {
    const mygamepad = engine.mygamepad
    if (!mygamepad) return

    const y = mygamepad.getAxes(Axes.LeftStickY)

    if (Math.abs(y) < 0.3) {
      this.moveLocked = false
    }

    if (!this.moveLocked) {
      if (y < -0.5) {
        this.selectedIndex = Math.max(0, this.selectedIndex - 1)
        this.moveLocked = true
      }

      if (y > 0.5) {
        this.selectedIndex = Math.min(this.options.length - 1, this.selectedIndex + 1)
        this.moveLocked = true
      }
    }

    if (mygamepad.isButtonPressed(Buttons.Face1)) {
      this.activateSelection(engine)
    }

    this.cursor.pos = new Vector(
      this.options[this.selectedIndex].pos.x - 40,
      this.options[this.selectedIndex].pos.y
    )
  }
}
