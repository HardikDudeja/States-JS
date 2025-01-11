interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}
class GameManager {
    private games: Game[];
    
    constructor() {
        this.games = [];
    }

    public addGame(id: string) {
        this.games.push({
            id,
            whitePlayerName: "Alice",
            blackPlayerName: "Bob",
            moves: []
        })
    }

    addMove(gameId: string, move: string) {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(g => g.id === gameId);
        game?.moves.push(move);
    }

    public getGames() {
        return this.games;
    }
}

export const gameManager: GameManager = new GameManager();