interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}
class GameManager {
    private static instance: GameManager
    private games: Game[];
    
    private constructor() {
        this.games = [];
    }

    static getInstance() {
        if(this.instance) {
            return this.instance;
        }
        this.instance = new GameManager();
        return this.instance;
    }

    addGame(id: string) {
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
    getGames() {
        return this.games;
    }
}

export const gameManager: GameManager = GameManager.getInstance();