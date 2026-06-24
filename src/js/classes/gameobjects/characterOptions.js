import { Actor, Keys, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from "../../resources";

export class CharacterOptions extends Actor {
  constructor(option, y) {
    super({ y: y });
    const spriteWidth = option.width / 5;
    const spriteHeight = option.height / 2;

    const characterOptionSheet = SpriteSheet.fromImageSource({
      image: option,
      grid: { rows: 2, columns: 5, spriteWidth, spriteHeight },
      spacing: {
        originOffset: {
          x: 0,
          y: -15,
        },
        margin: {
          x: 0,
          y: 15,
        },
      },
    });

    const idle = characterOptionSheet.sprites[5];
    idle.anchor = new Vector(0.5, 0.5);

    const walkingSide = Animation.fromSpriteSheet(
      characterOptionSheet,
      range(6, 8),
      150,
    );
    walkingSide.anchor = new Vector(0.5, 0.5);
    const walkingFront = Animation.fromSpriteSheet(
      characterOptionSheet,
      range(0, 1),
      150,
    );
    walkingFront.anchor = new Vector(0.5, 0.5);
    const walkingBack = Animation.fromSpriteSheet(
      characterOptionSheet,
      range(3, 4),
      150,
    );
    walkingBack.anchor = new Vector(0.5, 0.5);

    this.graphics.add("idle", idle);
    this.graphics.add("walkingSide", walkingSide);
    this.graphics.add("walkingFront", walkingFront);
    this.graphics.add("walkingBack", walkingBack);
    this.graphics.use("idle");

    this.anchor = new Vector(0.5, 0.5);
    this.scale = new Vector(0.5, 0.5);
  }
}
