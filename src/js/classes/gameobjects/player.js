import { Actor, Keys, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from "../../resources";
import { CharacterOptions } from "./characterOptions";

export class Player extends Actor {
  inCutscene;
  bodyparts;

  chosenHair;
  chosenSkintone;
  chosenShirt;
  chosenPants;
  chosenShoes;
  constructor(x, y, inCutscene) {
    super({ x, y });
    this.inCutscene = inCutscene;
  }

  onInitialize(engine) {
    if (localStorage.getItem("chosenCharacterOptions") == null) {
      let characterOptionsJSON = localStorage.getItem("characterOptions");
      let characterOptions = JSON.parse(characterOptionsJSON);
      this.hair = Resources[characterOptions.hair];
      this.skintone = Resources[characterOptions.skintone];
      this.shirt = Resources[characterOptions.shirt];
      this.pants = Resources[characterOptions.pants];
      this.shoes = Resources[characterOptions.shoes];

      console.log(this.hair);
      this.addChild(new CharacterOptions(this.skintone, 0));
      this.addChild(new CharacterOptions(this.hair, 0));
      this.addChild(new CharacterOptions(this.shirt, 0));
      this.addChild(new CharacterOptions(this.pants, 10));
      this.addChild(new CharacterOptions(this.shoes, 0));
    } else {
      let characterOptionsJSON = localStorage.getItem("chosenCharacterOptions");
      let characterOptions = JSON.parse(characterOptionsJSON);
      this.hair = Resources[characterOptions.hair];
      this.skintone = Resources[characterOptions.skintone];
      this.shirt = Resources[characterOptions.shirt];
      this.pants = Resources[characterOptions.pants];
      this.shoes = Resources[characterOptions.shoes];

      console.log(this.hair);
      this.chosenSkintone = this.addChild(
        new CharacterOptions(this.skintone, 0),
      );
      this.chosenHair = this.addChild(new CharacterOptions(this.hair, 0));
      this.chosenShirt = this.addChild(new CharacterOptions(this.shirt, 0));
      this.chosenPants = this.addChild(new CharacterOptions(this.pants, 10));
      this.chosenShoes = this.addChild(new CharacterOptions(this.shoes, 0));
    }
  }

  onPostUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    this.children.forEach((c) => c.graphics.use("idle"));

    if (this.inCutscene) {
    } else {
      if (engine.input.keyboard.isHeld(Keys.A)) {
        this.children.forEach((c) => c.graphics.use("walkingSide"));
        this.children.forEach((c) => (c.graphics.flipHorizontal = true));

        xspeed = -300;
      } 
      if (engine.input.keyboard.isHeld(Keys.D)) {
        this.children.forEach((c) => c.graphics.use("walkingSide"));
        this.children.forEach((c) => (c.graphics.flipHorizontal = false));
        xspeed = 300;
      }
      if (engine.input.keyboard.isHeld(Keys.W)) {
        this.children.forEach((c) => c.graphics.use("walkingBack"));
        this.children.forEach((c) => (c.graphics.flipHorizontal = true));
        yspeed = -300;
      }
      if (engine.input.keyboard.isHeld(Keys.S)) {
        this.children.forEach((c) => c.graphics.use("walkingFront"));
        this.children.forEach((c) => (c.graphics.flipHorizontal = true));
        yspeed = 300;
      }
      this.vel = new Vector(xspeed, yspeed);
    }
  }
}
