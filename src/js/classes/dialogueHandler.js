import dialogueData from "../data/dialogue.json";
import { Engine, ScreenElement } from "excalibur";
import { Resources } from "../resources.js";
import { Dialogue } from "./scenes/dialogue.js";

export class DialogueHandler {
  //   static activateHomeDialogue(engine, dialogueMethodName) {
  //     const { nodes, targetScene } = this[dialogueMethodName]();
  //     const sceneName = `dialogue_${dialogueMethodName}`;

  //   }

  //   static backpackDialogueStart() {
  //     return { nodes: jsonData.home_room_1, targetScene: "bedroom" };
  //   }

  //   static backpackDialogueEnd() {
  //       return { nodes: jsonData.home_room_2, targetScene: "bedroom" };
  //   }

  static getDialogue(id, engine) {
    // console.log(jsonData);
    const dialogue = dialogueData.find((dialogue) => dialogue.id === id)
    console.log(dialogue.question)
    engine.goToScene("bedroom")
    // if (room.dialogtree != "") {
    //   for (let dialog of room.dialogtree) {
    //     console.log(`dialog id is ${dialog.id}`);
    //     for (let choice of dialog.choices) {
    //       console.log(choice.text);
    //     }
    //   }
    // }
  }

  // static getChoices(){

  // }

  // static goToChoice(){

  // }
}
