import { Actor, Engine, Scene } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { InvisibleWall } from "../gameobjects/invisible-wall.js"
import { Player } from "../gameobjects/player.js";
import { Door } from "../gameobjects/door.js"
import { InteractableNpc } from "../gameobjects/interactable-npc.js";
import { ClassroomTable } from "../gameobjects/classroom-table.js";

export class Classroom extends Scene {
    onInitialize(engine) {
        const background = new Background(Resources.Classroom);
        this.add(background);

        //borders
        this.add(new InvisibleWall(0, 300, 10, 1000))         // links
        this.add(new InvisibleWall(1280, 300, 10, 1000))      // rechts
        this.add(new InvisibleWall(1280, 150, 150, 40))      // boven (rechts van deur)
        this.add(new InvisibleWall(0, 150, 2187, 40))          // boven (links van deur)
        this.add(new InvisibleWall(800, 730, 1900, 40))      // onder

        for (let i = 0; i < 10; i++) {
            
            const row = Math.floor(i / 5)
            const col = i % 5

            const x = 350 + col * 150
            const y = 400 + row * 150

            this.add(new ClassroomTable(x, y))
        }

        this.add(new Door(1150, 85, "bedroom"))

        this.player = new Player(1150, 100)
        this.add(this.player)

        this.add(new InteractableNpc(550, 200))
    }
}
