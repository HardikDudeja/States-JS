// Just log the state on the server every 5 seconds

import { gameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        console.log(gameManager.getGames());
    }, 5000);
}
