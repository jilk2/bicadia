import { Actor, Engine, Scene, ScreenElement, Vector, Keys } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";
import { ArrowLeft } from "../gameobjects/arrowLeft.js";
import { ArrowRight } from "../gameobjects/arrowRight.js";
import { LocalStorageHandler } from "../../localstorageHandler.js";
import { Dialogue } from "./dialogue.js";
import { Pronounce } from "../gameobjects/pronounceChoice.js";

export class CharacterCreation extends Scene {
  hairOptions = { 0: "ShortBlackHairSheet", 1: "LongBlackHairSheet" };
  selectedHair = 0;

  skintoneOptions = { 0: "skintoneOne", 1: "skintoneTwo", 2: "skintoneThree" };
  selectedSkintone = 0;

  shirtOptions = { 0: "LongSleevedRed" };
  selectedShirt = 0;

  pantOptions = { 0: "PantsBlue", 1: "PantsBlack" };
  selectedPants = 0;

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

    this.player = new Player(690, 360, true);
    this.add(this.player);

    this.PronounceOne = new Pronounce(engine);
    this.add(this.PronounceOne);

    // this.PronounceTwo = new Pronounce();
    // this.add(this.PronounceTwo);
  }

  updateCharacter(options, direction) {
    if (options == 0) {
      const hairLength = Object.keys(this.hairOptions).length;
      this.selectedHair = this.selectedHair += direction;
      if (this.selectedHair > hairLength - 1) this.selectedHair = 0;
      if (this.selectedHair < 0) this.selectedHair = hairLength - 1;
      this.characterOptions.hair = this.hairOptions[this.selectedHair];
    }

    if (options == 1) {
      const skinToneLength = Object.keys(this.skintoneOptions).length;
      this.selectedSkintone = this.selectedSkintone += direction;
      if (this.selectedSkintone > skinToneLength - 1) this.selectedSkintone = 0;
      if (this.selectedSkintone < 0) this.selectedSkintone = skinToneLength - 1;
      this.skintoneOptions[this.selectedSkintone];
      this.characterOptions.skintone =
        this.skintoneOptions[this.selectedSkintone];
    }
    if (options == 2) {
      const shirtLength = Object.keys(this.shirtOptions).length;
      this.selectedShirt = this.selectedShirt += direction;
      if (this.selectedShirt > shirtLength - 1) this.selectedShirt = 0;
      if (this.selectedShirt < 0) this.selectedShirt = shirtLength - 1;
      this.shirtOptions[this.selectedShirt];

      this.characterOptions.shirt = this.shirtOptions[this.selectedShirt];
    }
    if (options == 3) {
      const pantsLength = Object.keys(this.pantOptions).length;
      this.selectedPants = this.selectedPants += direction;
      if (this.selectedPants > pantsLength - 1) this.selectedPants = 0;
      if (this.selectedPants < 0) this.selectedPants = pantsLength - 1;
      this.pantOptions[this.selectedPants];
      console.log(this.pantOptions[this.selectedPants]);
      this.characterOptions.pants = this.pantOptions[this.selectedPants];
    }
    if (options == 4) {
      const shoesLength = Object.keys(this.shoeOptions).length;
      this.selectedShoes = this.selectedShoes += direction;
      if (this.selectedShoes > shoesLength - 1) this.selectedShoes = 0;
      if (this.selectedShoes < 0) this.selectedShoes = shoesLength - 1;
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
    this.player = new Player(690, 360, true);
    this.remove(this.player);
    this.add(this.player);
  }
}
