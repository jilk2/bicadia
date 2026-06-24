import {
  Actor,
  Keys,
  SpriteSheet,
  Vector,
  range,
  Animation,
  CollisionType,
  Shape,
  Axes,
  Buttons,
} from "excalibur";
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

  constructor(x,y, inCutscene) {
    super({
      x,
      y,
      width: 16,
      height: 10,
      collisionType: CollisionType.Active,
      collider: Shape.Box(16, 10, new Vector(0.5, -0.45)),
    });
    this.inCutscene = inCutscene;
  }

  onInitialize(){
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
    this.currentInteractable = null
  }

  onCollisionStart(self, other) {
    console.log("collision")
    if (!other || !other.owner) {
      return 
    }
    
    console.log("collided with", other.owner)

    if (other.owner.interactable) {
      console.log("interactable found")
      this.currentInteractable = other.owner
    }
  }

  onCollisionEnd(self, other) {
    if (!other || !other.owner) {
      return
    }

    if (this.currentInteractable === other.owner) {
      this.currentInteractable = null
    }
  }


  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    this.children.forEach((c) => c.graphics.use("idle"));

    if (this.inCutscene) {
    } else {
      if(!engine.mygamepad){
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
      this.vel = new Vector(xspeed, yspeed);if(engine.input.keyboard.wasPressed(Keys.E) && this.currentInteractable && this.currentInteractable.needsInteraction){
        this.currentInteractable.interaction(engine)
      }
      if(this.currentInteractable && !this.currentInteractable.needsInteraction){
        this.currentInteractable.interaction(engine)
      }
    } else {
      const xspeed = engine.mygamepad.getAxes(Axes.LeftStickX)
      const yspeed = engine.mygamepad.getAxes(Axes.LeftStickY)
      this.vel = new Vector(xspeed * 300, yspeed * 300)
      if (xspeed < 0){
        this.children.forEach((c) => c.graphics.use("walkingSide"));
        this.children.forEach((c) => (c.graphics.flipHorizontal = true));
      } else if (xspeed > 0){
        this.graphics.use("walkingSide");
        this.children.forEach((c) => c.graphics.use("walkingSide"));
        this.children.forEach((c) => (c.graphics.flipHorizontal = false));
      } else if (yspeed < 0){
        this.children.forEach((c) => c.graphics.use("walkingBack"));
      } else if (yspeed > 0){
        this.children.forEach((c) => c.graphics.use("walkingFront"));
      }
      if (engine.mygamepad.isButtonPressed(Buttons.Face3) && this.currentInteractable) {
        this.currentInteractable.interaction(engine)
      }
    }
  }
  }
}
