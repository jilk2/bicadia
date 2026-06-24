import { ImageSource, Sound, Resource, Loader } from "excalibur";

// voeg hier jouw eigen resources toe
const Resources = {
  BackgroundTopDown: new ImageSource("images/background-topdown.png"),
  Bedroom: new ImageSource("images/background-bedroom.png"),
  Livingroom: new ImageSource("images/background-livingroom.png"),
  PlayerSheet: new ImageSource("images/playersheet.png"),
  Textbox: new ImageSource("images/textbox.png"),
  InvisibleWall: new ImageSource("images/invis.png"),
  Classroom: new ImageSource("images/background-classroomsprites.png"),
  Silhouette: new ImageSource("images/silhouet.png"),
  Emiely: new ImageSource("images/emily.png"),
  Teacher: new ImageSource("images/Jürgen.png"),
  StartMenu: new ImageSource("images/background-menu.png"),
  MiniGame: new ImageSource("images/background-minigame.png"),

  //classroom objects


  //livingroom objects
  Door: new ImageSource("images/Door.png"),
  TVKast: new ImageSource("images/TVkast.png"),
  Bank: new ImageSource("images/bank.png"),
  DoorMat: new ImageSource("images/DoorMat.png"),
  Klok: new ImageSource("images/klok.png"),
  Lamp: new ImageSource("images/Lamp.png"),
  Mat: new ImageSource("images/mat.png"),
  Sidebank: new ImageSource("images/sidebank.png"),

  //bedroom objects
  Wardrobe: new ImageSource("images/wardrobe.png"),
  Bed: new ImageSource("images/bed.png"),
  Backpack: new ImageSource("images/backpack.png"),
  Desk: new ImageSource("images/Desk.png"),
  Deskchair: new ImageSource("images/Deskchair.png"),

  //dialogue scenes
  DialogueRoom: new ImageSource("images/background-bedroom.png"),
  DialogueSchool: new ImageSource("images/background-classroom.png"),
  Plant: new ImageSource("images/plant.png"),

  //classroom objects
  ClassroomTable: new ImageSource("images/classroom-table.png"),
  ClassroomDesk: new ImageSource("images/classroom-desk.png"),
  thinkBubble: new ImageSource("images/think-bubble.png"),

  //minigame objects
  ConfidenceOrb: new ImageSource("images/confidence-orb.png"),

  //character costumization UI
  ArrowLeft: new ImageSource("images/Chevron-Arrow-Left.png"),
  ArrowRight: new ImageSource("images/Chevron-Arrow-Right.png"),



  //character costumization
  skintoneOne: new ImageSource("images/skintoneone.png"),
  ShirtRed: new ImageSource("images/shirt-red.png"),
  PantsBlue: new ImageSource("images/pants-blue.png"),
  PantsBlack: new ImageSource("images/pants-black.png"),
  LongSleevedRed: new ImageSource("images/longsleeve-red.png"),
  GreyShoesSheet: new ImageSource("images/shoes-grey.png"),
  LongsleeveBlueSheet: new ImageSource("images/complete-longsleeve-blue.png"),
  PantsBlueSheet: new ImageSource("images/complete-pants-blue.png"),
  ShirtRedTwoSheet: new ImageSource("images/complete-shirt-red2.png"),
  ShoesGreySheet: new ImageSource("images/complete-shoes-grey.png"),
  ShortBlondHairSheet: new ImageSource("images/BlondShortHair.png"),
  LongBlackHairSheet: new ImageSource("images/BlackLongHair.png"),
  ShortBlackHairSheet: new ImageSource("images/BlackShortHair.png"),
  skintoneTwo: new ImageSource("images/skintonetwo.png"),
  skintoneThree: new ImageSource(
    "images/skintonethree.png",
  ),
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
  ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
