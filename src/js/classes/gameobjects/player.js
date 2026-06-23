import { Actor, Keys, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from "../../resources";
import { CharacterOptions } from "./characterOptions";

export class Player extends Actor {
  inCutscene;
  bodyparts;

  skinTone;
  hair;

  constructor(x, y, inCutscene) {
    super({ x, y });
    this.inCutscene = inCutscene;
    // const playersheet = SpriteSheet.fromImageSource({
    //   image: Resources.PlayerSheet,
    //   grid: { rows: 2, columns: 5, spriteWidth: 16, spriteHeight: 30 }
    // })

    // const idle = playersheet.sprites[5]
    // const walkingSide = Animation.fromSpriteSheet(playersheet, range(6, 8), 150)
    // const walkingFront = Animation.fromSpriteSheet(playersheet, range(0, 1), 150)
    // const walkingBack = Animation.fromSpriteSheet(playersheet, range(3, 4), 150)
    // this.graphics.add("idle", idle)
    // this.graphics.add("walkingSide", walkingSide)
    // this.graphics.add("walkingFront", walkingFront)
    // this.graphics.add("walkingBack", walkingBack)
    // this.graphics.use(idle);
    this.scale = new Vector(5.5, 5.5);
  }

  onInitialize(engine) {
    // later: verwijder alle gemarkeerde children

    let characterOptionsJSON = localStorage.getItem("characterOptions");
    let characterOptions = JSON.parse(characterOptionsJSON);
    let hair = Resources[characterOptions.hair];
    let skintone = Resources[characterOptions.skintone];
    let shirt = Resources[characterOptions.shirt];
    let pants = Resources[characterOptions.pants];
    let shoes = Resources[characterOptions.shoes];
    // this.hairsprite = `Resources.${}`
    console.log(hair);
    this.addChild(new CharacterOptions(skintone, 200, 325, 0, 25));
    // this.addChild(new CharacterOptions(hair, 150, 150, 40, 0));
    this.addChild(new CharacterOptions(shirt, 200, 325, 0, 25));
    this.addChild(new CharacterOptions(pants, 200, 300, 0, 25));
    this.addChild(new CharacterOptions(shoes, 200, 300, 0, 25));
    // this.addChild(new CharacterOptions(shirt, 150, 150));

    // switch (characterOptions.hair) {
    //   case "shortBlondHair":
    //     this.hair = new CharacterOptions(Resources.ShortBlondHairSheet, 0)
    //     break;

    // }

    // switch (characterOptions.skintone) {
    //   case "skintoneOne":
    //     this.skinTone = new CharacterOptions(Resources.skintoneOne, 0)
    //     break;

    // }

    // switch (characterOptions.shirt) {
    //   case "shirtRedTwo":
    //     this.shirt = new CharacterOptions(Resources.ShirtRedTwoSheet, 0)
    //     break;

    // }

    // switch (characterOptions.pants) {
    //   case "pantsBlue":
    //     this.pants = new CharacterOptions(Resources.PantsBlueSheet, 0)
    //     break;

    // }

    // switch (characterOptions.shoes) {
    //   case "shoesGrey":
    //     this.shoes = new CharacterOptions(Resources.ShoesGreySheet, 0)
    //     break;

    // }

    // get the clothing options from local storage

    // let pantsImage
    // if (localstorage.pants == "pants-1"){
    // pantsImage = Resources.Pants1
    // }
    // this.shoes = new Clothing(pantsImage, 1)

    // this.shoes = new Actor()
    // this.shoes.graphics.use(Resources.GreyShoes.toSprite())
    // this.shoes.pos.y += 1
    // this.addChild(this.shoes)

    // this.pant = new Actor()
    // this.pant.graphics.use(Resources.PantsBlue.toSprite())
    // this.pant.pos.y += 7
    // this.addChild(this.pant)

    // this.shirt = new Actor()
    // this.shirt.graphics.use(Resources.ShirtRed.toSprite())
    // this.addChild(this.shirt)
  }

  updateGraphics() {
    // updateGraphics(shirt, pants, shoes) {
    // console.log("I received new bodyparts")
    // console.log(this.scene.engine.bodyparts)
    // const settings = this.scene.engine.bodyparts
    // if(shirt ===  "shirt-1") {
    // this.shirt.image = Resources.shirt1
    // }
    // Je maakt een glothing class, waar je een image aan door geeft
    // this.pant.graphics.use(Resources.PantsBlue.toSprite())
    // this.shirt.graphics.use(Resources.ShirtRed.toSprite())
    // this.shoes.graphics.use(Resources.GreyShoes.toSprite())
    // save to localstorage
  }

  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    // this.graphics.use("idle")
    if (!this.inCutscene) {
    } else {
      if (engine.input.keyboard.isHeld(Keys.A)) {
        this.graphics.use("walkingSide");
        this.graphics.flipHorizontal = true;

        // this.pants.graphics.use("walkingSide")
        // this.pants.graphics.flipHorizontal = true
        xspeed = -300;
      }
      if (engine.input.keyboard.isHeld(Keys.D)) {
        xspeed = 300;
        this.graphics.use("walkingSide");
        this.graphics.flipHorizontal = false;
      }
      if (engine.input.keyboard.isHeld(Keys.W)) {
        this.graphics.use("walkingBack");
        yspeed = -300;
      }
      if (engine.input.keyboard.isHeld(Keys.S)) {
        this.graphics.use("walkingFront");
        yspeed = 300;
      }
      this.vel = new Vector(xspeed, yspeed);
    }
  }
}
