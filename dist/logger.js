"use strict";
// Just log the state on the server every 5 seconds
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = startLogger;
const store_1 = require("./store");
function startLogger() {
    setInterval(() => {
        console.log(store_1.gameManager.getGames());
    }, 5000);
}
