"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
    }
    addGame(id) {
        this.games.push({
            id,
            whitePlayerName: "Alice",
            blackPlayerName: "Bob",
            moves: []
        });
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(g => g.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    getGames() {
        return this.games;
    }
}
exports.gameManager = new GameManager();
