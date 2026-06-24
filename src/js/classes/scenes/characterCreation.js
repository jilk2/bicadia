import { Actor, Engine, Scene, ScreenElement, Vector, Keys } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";
import { ArrowLeft } from "../gameobjects/arrowLeft.js";
import { ArrowRight } from "../gameobjects/arrowRight.js";
import { LocalStorageHandler } from "../../localstorageHandler.js";

export class CharacterCreation extends Scene {
  // let shirtOptions = ["red-shirt", "blue-shirt"]
  //  let selectedShirt
  // Array with hair options for local storage
  hairOptions = { 0: "ShortBlackHairSheet", 1: "LongBlackHairSheet" };
  selectedHair = 0;
  // Array with skintone options for local storage
  skintoneOptions = { 0: "SkintoneTwo", 1: "SkintoneTwo", 2: "skintoneOne" };
  selectedSkintone = 0;
  // Array with shirt options for local storage
  shirtOptions = { 0: "LongSleevedRed", 1: "" };
  selectedShirt = 0;
  // Array with pants/skirt options for local storage
  pantOptions = { 0: "PantsBlue", 1: "PantsBlack" };
  selectedPants = 0;
  // Array with shoe options for local storage
  shoeOptions = { 0: "GreyShoesSheet" };
  selectedShoes = 0;

  characterOptions = {
    hair: this.hairOptions[0],
    skintone: this.skintoneOptions[0],
    shirt: this.shirtOptions[0],
    pants: this.pantOptions[0],
    shoes: this.shoeOptions[0],
  };

  onInitialize(engine) {
    for (let i = 0; i < 5; i++) {
      this.add(new ArrowLeft(i));
    }

    for (let i = 0; i < 5; i++) {
      this.add(new ArrowRight(i));
    }

    LocalStorageHandler.saveCharacterOptions(
      JSON.stringify(this.characterOptions),
    );

    this.player = new Player(690, 360, false);
    this.add(this.player);
  }

  updateCharacter(options, direction) {
    if (options == 0) {
      this.selectedHair = this.selectedHair += direction;
      this.hairOptions[this.selectedHair];
      console.log(this.hairOptions[this.selectedHair]);
      this.characterOptions.hair = this.hairOptions[this.selectedHair];
    }

    if (options == 1) {
      this.selectedSkintone = this.selectedSkintone += direction;
      this.skintoneOptions[this.selectedSkintone];
      console.log(this.skintoneOptions[this.selectedSkintone]);
      this.characterOptions.skintone =
        this.skintoneOptions[this.selectedSkintone];
    }
    if (options == 2) {
      this.selectedShirt = this.selectedShirt += direction;
      this.shirtOptions[this.selectedShirt];
      console.log(this.shirtOptions[this.selectedShirt]);
      this.characterOptions.shirt = this.shirtOptions[this.selectedShirt];
    }
    if (options == 3) {
      this.selectedPants = this.selectedPants += direction;
      this.pantOptions[this.selectedPants];
      console.log(this.pantOptions[this.selectedPants]);
      this.characterOptions.pants = this.pantOptions[this.selectedPants];
    }
    if (options == 4) {
      this.selectedShoes = this.selectedShoes += direction;
      this.shoeOptions[this.selectedShoes];
      console.log(this.shoeOptions[this.selectedShoes]);
      this.characterOptions.shoes = this.shoeOptions[this.selectedShoes];
    }

    console.log(this.characterOptions);

    if (this.player) {
      this.remove(this.player);
      this.player = null;
    }

    LocalStorageHandler.saveCharacterOptions(
      JSON.stringify(this.characterOptions),
    );
    this.player = new Player(690, 360, false);
    this.remove(this.player);
    this.add(this.player);
  }

  onPreUpdate(engine) {
    if (engine.input.keyboard.isHeld(Keys.Space)) {
      LocalStorageHandler.saveChosenOptions(
        JSON.stringify(this.characterOptions),
      );
      engine.goToScene("bedroom")
    }
  }
}
