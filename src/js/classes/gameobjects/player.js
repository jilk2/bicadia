import { Actor, Keys, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from "../../resources";
import { CharacterOptions } from "./characterOptions";

export class Player extends Actor {
  inCutscene;
  bodyparts;

  skinTone;
  hair;

  constructor(x, y, inCutscene) {
    super({ x, y });
    this.inCutscene = inCutscene;
  }

  onInitialize(engine) {
    if(localStorage.getItem("chosenCharacterOptions") == "" || localStorage.getItem("chosenCharacterOptions") == null){

    let characterOptionsJSON = localStorage.getItem("characterOptions");
    let characterOptions = JSON.parse(characterOptionsJSON);
    let hair = Resources[characterOptions.hair];
    let skintone = Resources[characterOptions.skintone];
    let shirt = Resources[characterOptions.shirt];
    let pants = Resources[characterOptions.pants];
    let shoes = Resources[characterOptions.shoes];

    console.log(hair);
    this.addChild(new CharacterOptions(skintone,0));
    this.addChild(new CharacterOptions(hair,0));
    this.addChild(new CharacterOptions(shirt,0));
    this.addChild(new CharacterOptions(pants,10));
    this.addChild(new CharacterOptions(shoes,0));
    } else {
    let characterOptionsJSON = localStorage.getItem("chosenCharacterOptions");
    let characterOptions = JSON.parse(characterOptionsJSON);
    let hair = Resources[characterOptions.hair];
    let skintone = Resources[characterOptions.skintone];
    let shirt = Resources[characterOptions.shirt];
    let pants = Resources[characterOptions.pants];
    let shoes = Resources[characterOptions.shoes];

    console.log(hair);
    this.addChild(new CharacterOptions(skintone,0));
    this.addChild(new CharacterOptions(hair,0));
    this.addChild(new CharacterOptions(shirt,0));
    this.addChild(new CharacterOptions(pants,10));
    this.addChild(new CharacterOptions(shoes,0));
    }
    
  }

  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;

    if (!this.inCutscene) {
    } else {
      if (engine.input.keyboard.isHeld(Keys.A)) {
        this.graphics.use("walkingSide");
        this.graphics.flipHorizontal = true;

       
        xspeed = -300;
      }
      if (engine.input.keyboard.isHeld(Keys.D)) {
        xspeed = 300;
        this.graphics.use("walkingSide");
        this.graphics.flipHorizontal = false;
      }
      if (engine.input.keyboard.isHeld(Keys.W)) {
        this.graphics.use("walkingBack");
        yspeed = -300;
      }
      if (engine.input.keyboard.isHeld(Keys.S)) {
        this.graphics.use("walkingFront");
        yspeed = 300;
      }
      this.vel = new Vector(xspeed, yspeed);
    }
  }
}
