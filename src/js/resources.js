import { ImageSource, Sound, Resource, Loader } from "excalibur";

// voeg hier jouw eigen resources toe
const Resources = {
  BackgroundTopDown: new ImageSource("images/background-topdown.png"),
  Bedroom: new ImageSource("images/BedRoomMC.png"),
  skintoneOne: new ImageSource("images/playersheet.png"),
  Textbox: new ImageSource("images/textbox.png"),
  ShirtRed: new ImageSource("images/shirt-red.png"),
  PantsBlue: new ImageSource("images/pants-blue.png"),
  ArrowLeft: new ImageSource("images/Chevron-Arrow-Left.png"),
  ArrowRight: new ImageSource("images/Chevron-Arrow-Right.png"),
  LongSleevedRed: new ImageSource("images/longsleeve-red.png"),
  GreyShoes: new ImageSource("images/shoes-grey.png"),
  LongsleeveBlueSheet: new ImageSource("images/complete-longsleeve-blue.png"),
  PantsBlueSheet: new ImageSource("images/complete-pants-blue.png"),
  ShirtRedTwoSheet: new ImageSource("images/complete-shirt-red2.png"),
  ShoesGreySheet: new ImageSource("images/complete-shoes-grey.png"),
  ShortBlondHairSheet: new ImageSource("images/BlondShortHair.png"),
  SkintoneTwo: new ImageSource("images/CropedFullCompleteCharacterSprite1.png"),
  SkintoneThree: new ImageSource("images/CropedFullCompleteCharacterSprite2.png"),

};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
  ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
