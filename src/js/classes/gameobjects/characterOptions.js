import { Actor, Keys, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from "../../resources";

export class CharacterOptions extends Actor {
  constructor(option, offsetSpritex, offsetSpritey, offsetoriginx = 0, offsetoriginy = 0) {
    super();

    const characterOptionSheet = SpriteSheet.fromImageSource({
      image: option,
      grid: {
        rows: 2,
        columns: 5,
        spriteWidth: offsetSpritex,
        spriteHeight: offsetSpritey,
      },
      spacing:{
        originOffset:{
            x:offsetoriginx,
            y:offsetoriginy
        }
      }
    });

    const idle = characterOptionSheet.sprites[4];

    const walkingSide = Animation.fromSpriteSheet(
      characterOptionSheet,
      range(6, 8),
      150,
    );
    const walkingFront = Animation.fromSpriteSheet(
      characterOptionSheet,
      range(0, 1),
      150,
    );
    const walkingBack = Animation.fromSpriteSheet(
      characterOptionSheet,
      range(3, 4),
      150,
    );
    this.graphics.add("idle", idle);
    this.graphics.add("walkingSide", walkingSide);
    this.graphics.add("walkingFront", walkingFront);
    this.graphics.add("walkingBack", walkingBack);
    this.graphics.use(idle);
    this.scale = new Vector(0.1, 0.1);
  }
}
