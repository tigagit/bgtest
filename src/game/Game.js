// src/game/Game.js
import { Game } from 'boardgame.io/core';

const MyGame = Game({
    setup: () => ({
        players: []  // Ensure players is initialized
    }),

    moves: {
        addPlayer(G, ctx) {
            // Initialize players array if undefined
            if (!G.players) {
                G.players = [];
            }
            G.players.push(ctx.playerID); // Push the current player ID
        },
    },

    // Add more game logic as needed
});

export default MyGame;
