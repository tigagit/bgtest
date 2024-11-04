// src/game/Game.js
import { Game } from 'boardgame.io/core';

const MyGame = Game({
    setup: () => ({ players: [] }),

    moves: {
        addPlayer(G, ctx) {
            G.players.push(ctx.playerID);
        },
    },

    // Add more game logic as needed
});

export default MyGame;
