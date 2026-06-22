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
    hairOptions = ["shortBlondHair"];
    selectedHair;
    // Array with skintone options for local storage
    skintoneOptions = ["skintoneOne", "skintoneTwo", "skintoneThree"];
    selectedSkintone;
    // Array with shirt options for local storage
    shirtOptions = ["longsleeveBlue", "shirtRedTwo"];
    selectedShirt;
    // Array with pants/skirt options for local storage
    pantOptions = ["pantsBlue"];
    selectedPants;
    // Array with shoe options for local storage
    shoeOptions = ["shoesGrey"];
    selectedShoes;



    onInitialize(engine) {
        // haal local storage op
        // localStorage.getItem()
        //  zet de heuidige opties als selected
        // selectedShirt = optie


        this.player = new Player(690, 360, false)
        this.add(this.player)


        // Creates and tags the arrows required for character creation. 
        for (let i = 0; i < 5; i++) {
            this.add(new ArrowLeft(i))
        }

        for (let i = 0; i < 5; i++) {
            this.add(new ArrowRight(i))
        }

    }

    updateCharacter(options, direction) {
        // Updates the bodyparts array 
        // this.engine.bodyparts[bodypart] = this.engine.bodyparts[bodypart] + direction

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