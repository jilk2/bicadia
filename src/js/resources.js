import { ImageSource, Sound, Resource, Loader } from "excalibur";

// voeg hier jouw eigen resources toe
const Resources = {
  BackgroundTopDown: new ImageSource("images/background-topdown.png"),
  Bedroom: new ImageSource("images/BedRoomMC.png"),
  PlayerSheet: new ImageSource("images/playersheet.png"),
  Textbox: new ImageSource("images/textbox.png"),
  ShirtRed: new ImageSource("images/shirt-red.png"),
  PantsBlue: new ImageSource("images/pants-blue.png"),
  ArrowLeft: new ImageSource("images/Chevron-Arrow-Left.png"),
  ArrowRight: new ImageSource("images/Chevron-Arrow-Right.png"),
  LongSleevedRed: new ImageSource("images/longsleeve-red.png"),
  GreyShoes: new ImageSource("images/shoes-grey.png")
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
  ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
