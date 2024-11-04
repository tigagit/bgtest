// src/game/Game.js

const MyGame = {
    setup: () => ({ players: [] }),

    moves: {
        addPlayer(G, ctx) {
            G.players.push(ctx.playerID);
        },
    },

    // Add more game logic as needed
};

export default MyGame;
