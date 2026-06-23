import { Actor, Engine, Scene, ScreenElement, Vector } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { Player } from "../gameobjects/player.js";
import { ArrowLeft } from "../gameobjects/arrowLeft.js";
import { ArrowRight } from "../gameobjects/arrowRight.js";

export class CharacterCreation extends Scene {
  // let shirtOptions = ["red-shirt", "blue-shirt"]
  //  let selectedShirt
  // Array with hair options for local storage
  hairOptions = { 0: "ShortBlondHairSheet", 1: "" };
  selectedHair = 0;
  // Array with skintone options for local storage
  skintoneOptions = { 0: "skintoneOne", 1: "skintoneTwo", 2: "skintoneThree" };
  selectedSkintone = 0;
  // Array with shirt options for local storage
  shirtOptions = { 0: "longsleeveBlue", 1: "shirtRedTwo" };
    selectedShirt = 0;
  // Array with pants/skirt options for local storage
  pantOptions = { 0: "pantsBlue" };
    selectedPants = 0;
  // Array with shoe options for local storage
  shoeOptions = { 0: "shoesGrey" };
    selectedShoes = 0;

  characterOptions = [];

  onInitialize(engine) {
    // console.log(this.shoeOptions[0])
    // haal local storage op
    // localStorage.getItem()
    //  zet de heuidige opties als selected
    // selectedShirt = optie

    this.player = new Player(690, 360, false);
    this.add(this.player);

    // Creates and tags the arrows required for character creation.
    for (let i = 0; i < 5; i++) {
      this.add(new ArrowLeft(i));
    }

    for (let i = 0; i < 5; i++) {
      this.add(new ArrowRight(i));
    }
  }

  updateCharacter(options, direction) {
    // console.log(`pijl ${options} en de kant ${direction} is gedrukt`)

    if (options == 0) {
      this.selectedHair = this.selectedHair += direction;
      this.hairOptions[this.selectedHair];
      console.log(this.hairOptions[this.selectedHair]);
    }

    if (options == 1) {
      this.selectedSkintone = this.selectedSkintone += direction;
      this.skintoneOptions[this.selectedSkintone];
      console.log(this.skintoneOptions[this.selectedSkintone]);
    }
        if (options == 2) {
      this.selectedShirt = this.selectedShirt += direction;
      this.shirtOptions[this.selectedShirt];
      console.log(this.shirtOptions[this.selectedShirt]);
    }
            if (options == 3) {
      this.selectedPants = this.selectedPants += direction;
      this.pantOptions[this.selectedPants];
      console.log(this.pantOptions[this.selectedPants]);
    }
            if (options == 4) {
      this.selectedShoes = this.selectedShoes += direction;
      this.shoeOptions[this.selectedShoes];
      console.log(this.shoeOptions[this.selectedShoes]);
    }
    // Updates the bodyparts array
    // this.engine.bodyparts[bodypart] = this.engine.bodyparts[bodypart] + direction
    // console.log(this.engine.bodyparts[bodypart]);
    // this.
    // Ensures that the array cannot go into the negative numbers
    //     for(let i = 0; i < 5; i++) {
    //     if (this.engine.bodyparts[i] < 0) {
    //         this.engine.bodyparts[i] = 0
    //         console.log(`I reset the hair`)
    //     }
    //     if (this.engine.bodyparts[i] < 0) {
    //         this.engine.bodyparts[i] = 0
    //         console.log(`I reset the skin color`)
    //     }
    //     if (this.engine.bodyparts[i] < 0) {
    //         this.engine.bodyparts[i] = 0
    //         console.log(`I reset the shirt`)
    //     }
    //     if (this.engine.bodyparts[i] < 0) {
    //         this.engine.bodyparts[i] = 0
    //         console.log(`I reset the pants`)
    //     }
    //     if (this.engine.bodyparts[i] < 0) {
    //         this.engine.bodyparts[i] = 0
    //         console.log(`I reset the shoes`)
    //     }
    // }
    // // Ensures that the array cannot go past the number of available clothes.
    // for (let i = 0; i < 5; i++) {
    //     if (this.engine.bodyparts[i] > 3) {
    //         this.engine.bodyparts[i] = 0
    //         console.log(`I reset the hair`)
    //     }
    //     if (this.engine.bodyparts[i] > 3) {
    //         this.engine.bodyparts[i] = 0
    //         console.log(`I reset the skin color`)
    //     }
    //     if (this.engine.bodyparts[i] > 3) {
    //         this.engine.bodyparts[i] = 0
    //         console.log(`I reset the shirt`)
    //     }
    //     if (this.engine.bodyparts[i] > 3) {
    //         this.engine.bodyparts[i] = 0
    //         console.log(`I reset the pants`)
    //     }
    //     if (this.engine.bodyparts[i] > 3) {
    //         this.engine.bodyparts[i] = 0
    //         console.log(`I reset the shoes`)
    //     }
    // }
    // this.player.updateGraphics()
    // this.player.updateGraphics(selectedHair, selectedSkintone, selectedShirt, selectedPants, selectedShoes)
  }
}
