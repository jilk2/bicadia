import { ImageSource, Sound, Resource, Loader } from "excalibur";

// voeg hier jouw eigen resources toe
const Resources = {
  BackgroundTopDown: new ImageSource("images/background-topdown.png"),
  Bedroom: new ImageSource("images/BedRoomMC.png"),
  PlayerSheet: new ImageSource("images/playersheet.png"),
  Textbox: new ImageSource("images/textbox.png"),
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
  ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
