import jsonData from "../data/dialogue.json";
// import { engine } from "excalibur"
import { Resources } from "../resources.js";
import { Dialogue } from "./scenes/dialogue.js";

export class DialogueHandler {
  static activateHomeDialogue(engine, dialogueMethodName) {
    const { nodes, targetScene } = this[dialogueMethodName]();
    const sceneName = `dialogue_${dialogueMethodName}`;
    engine.addScene(sceneName, new Dialogue(Resources.DialogueSchool, nodes, targetScene));
    engine.goToScene(sceneName);
  }

    static activateHomeEndDialogue(engine, dialogueMethodName) {
    const { nodes, targetScene } = this[dialogueMethodName]();
    const sceneName = `dialogue_${dialogueMethodName}`;
    engine.addScene(sceneName, new Dialogue(Resources.DialogueSchool, nodes, targetScene));
    engine.goToScene(sceneName);
  }

  

  static backpackDialogueStart() {
    return { nodes: jsonData.home_room_1, targetScene: "bedroom" };
  }

  static backpackDialogueEnd() {
      return { nodes: jsonData.home_room_2, targetScene: "bedroom" };
  }

    static enterSchool() {
      return { nodes: jsonData.entering_school, targetScene: "classroom" };
  }

static EmielDialogueStart() {
      return { nodes: jsonData.school_emiel, targetScene: "classroom"};
  }
}
