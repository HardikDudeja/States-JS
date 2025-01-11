import { startLogger } from "./logger";
import { gameManager } from "./store";

// export const gameManager: GameManager = new GameManager()
startLogger();

setInterval(() => {
    gameManager.addGame(Math.random().toString());
}, 5000);