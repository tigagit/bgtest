// src/game/Game.js

const MyGame = {
    setup: () => ({
        players: []
    }),

    moves: {
        addPlayer(G, ctx) {
            // Spread the current players into a new array, adding a new player
            const newPlayers = [...G.players, `Player ${G.players.length + 1}`];
            G.players = newPlayers; // Replace the original array
            console.log("Updated players list:", G.players);
        },
    }
};

export default MyGame;
