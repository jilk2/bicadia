import { Axes, Buttons, Color, Label, Scene, Vector } from "excalibur";
import { Resources } from "../../resources";
import { Background } from "../gameobjects/background";

export class EndingScreen extends Scene {
    onInitialize(engine) {
        const background = new Background(Resources.endScreen)
        this.add(background)

    }
}