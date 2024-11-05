// src/game/Game.js
import { Game } from 'boardgame.io/core';

const MyGame = Game({
    setup: () => ({
        players: []  // Start with an empty players array
    }),

    moves: {
        addPlayer(G, ctx) {
            G.players.push(`Player ${G.players.length + 1}`);
            console.log("Updated players list:", G.players);
        },
    }
});

export default MyGame;
