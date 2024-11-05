// src/game/Game.js
const MyGame = {
    setup: () => ({ players: [] }),

    moves: {
        addPlayer(G, ctx) {
            // Add the player to G.players directly
            G.players.push(`Player ${G.players.length + 1}`);
            console.log("Updated players list:", G.players); // Debugging
        },
    },
};

export default MyGame;
