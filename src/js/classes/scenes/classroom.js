import { Actor, Engine, Scene, Vector } from "excalibur";
import { Resources } from "../../resources.js";
import { Background } from "../gameobjects/background.js";
import { InvisibleWall } from "../gameobjects/invisible-wall.js";
import { Player } from "../gameobjects/player.js";
import { Door } from "../gameobjects/door.js";
import { InteractableNpc } from "../gameobjects/interactable-npc.js";
import { ThinkBubble } from "../gameobjects/think-bubble.js";
import { ClassroomTable } from "../gameobjects/classroom-table.js";
import { Silhouette } from "../gameobjects/silhouette.js";
import { Teacher } from "../gameobjects/teacher.js";

export class Classroom extends Scene {
    onInitialize(engine) {
        const background = new Background(Resources.Classroom);
        this.add(background);
        //borders
        this.add(new InvisibleWall(0, 300, 10, 1000)); // links
        this.add(new InvisibleWall(1280, 300, 10, 1000)); // rechts
        this.add(new InvisibleWall(1280, 130, 150, 100)); // boven (rechts van deur)
        this.add(new InvisibleWall(0, 130, 2187, 100)); // boven (links van deur)
        this.add(new InvisibleWall(800, 760, 1900, 100)); // onder

        for (let i = 0; i < 10; i++) {
            const row = Math.floor(i / 5);
            const col = i % 5;

            const x = 350 + col * 150;
            const y = 400 + row * 150;

            this.add(new ClassroomTable(x, y))
        }

        for (let i = 0; i < 8; i++) {
            const row = Math.floor(i / 5)
            const col = i % 5

            const x = 350 + col * 150
            const y = 420 + row * 150

            this.add(new Silhouette(x, y))
        }

        this.add(new Door(1150, 85, "livingroom", "talkedToEmiely"))

        this.add(new InteractableNpc(800, 570))

        this.add(new Teacher(500, 150))

        this.player = new Player(1150, 200)
        this.add(this.player)

        this.thinkBubble = new ThinkBubble();
        this.add(this.thinkBubble);
        this.thinkBubble.loadNextGoal("My teacher looks friendly at least...");



    }
    onActivate() {
        // this.player.pos = new Vector(1155, 190)
    }
}
