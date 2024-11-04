// src/game/Game.js

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
