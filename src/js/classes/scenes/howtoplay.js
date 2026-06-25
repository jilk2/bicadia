import { Actor, Buttons, Engine, Label, Scene, Vector } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";

export class HowToPlay extends Scene {
    onInitialize(engine) {
        const background = new Background(Resources.HowToPlay);
        this.add(background);
        const BackToMain = new Label({
            x: 55,
            y: 620,
            text: "Back to main menu",
            scale: new Vector(2.7, 2.7)
        });
        this.add(BackToMain);
        BackToMain.on("pointerdown", () => this.BackToMainClickHandler());
    }
    BackToMainClickHandler() {
        this.engine.goToScene("startmenu");
    }

    onPreUpdate(engine){
        const mygamepad = engine.mygamepad
        if (!mygamepad) return

        if (mygamepad.isButtonPressed(Buttons.Face2)) {
            this.engine.goToScene("startmenu")
        }
    }
}
