import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode, Keys } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bedroom } from "./classes/scenes/bedroom.js";
import { Livingroom } from "./classes/scenes/livingroom.js";
import { Dialogue } from "./classes/scenes/dialogue.js";
import { Classroom } from "./classes/scenes/classroom.js";
import { StartMenu } from "./classes/scenes/startmenu.js";
import { HowToPlay } from "./classes/scenes/howtoplay.js";
import { Minigame } from "./classes/scenes/minigame.js";
import { CharacterCreation } from "./classes/scenes/characterCreation.js";
import { EndingScreen } from "./classes/scenes/endingscreen.js";
import { LivingroomEnding } from "./classes/scenes/livingroomEnding.js";
import { ClassroomAfterClass } from "./classes/scenes/classroomAfterClass.js";
import { BedroomEnding } from "./classes/scenes/bedroomEnding.js";

export class Game extends Engine {
  bravePoints = 0;
  pronounce;
  mygamepad;

  //variables to check if certain taskes are done
  pickedupBag = false;
  talkedToEmiely = false;

  constructor() {
    super({
      width: 1280,
      height: 720,
      maxFps: 60,
      displayMode: DisplayMode.FitScreen,
    });
    this.start(ResourceLoader).then(() => this.startGame());
    console.log(this.pronounce)
  }

  startGame() {
    this.input.gamepads.enabled = true;
    this.input.gamepads.on("connect", (connectevent) => {
      console.log("gamepad detected");
      this.mygamepad = connectevent.gamepad;
    });

    this.addScene("bedroom", new Bedroom());
    this.addScene("livingroom", new Livingroom());
    this.addScene("classroom", new Classroom());
    this.addScene("startmenu", new StartMenu());
    this.addScene("howtoplay", new HowToPlay());
    this.addScene("creation", new CharacterCreation());
    this.addScene("endingscreen", new EndingScreen());
    this.addScene("livingroom_ending", new LivingroomEnding());
    this.addScene("classroom_after_class", new ClassroomAfterClass());
    this.addScene("bedroom_ending", new BedroomEnding());
    this.goToScene("bedroom");
    this.goToScene("startmenu");
  }
}

new Game();
