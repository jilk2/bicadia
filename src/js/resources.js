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

  //classroom objects


  //livingroom objects
  Door: new ImageSource("images/Door.png"),
  TVKast: new ImageSource("images/TVkast.png"),

  //bedroom objects
  Wardrobe: new ImageSource("images/wardrobe.png"),
  Bed: new ImageSource("images/bed.png"),
  Backpack: new ImageSource("images/backpack.png"),
  Plant: new ImageSource("images/plant.png"),

  //classroom objects
  ClassroomTable: new ImageSource("images/classroom-table.png"),
  ClassroomDesk: new ImageSource("images/classroom-desk.png"),
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
  ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
