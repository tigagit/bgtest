// src/game/Game.js
const MyGame = {
    setup: () => ({ players: [] }), // Initialize players as an empty array

    moves: {
        addPlayer(G, ctx) {
            if (!G.players) G.players = []; // Ensure players is initialized
            G.players.push(`Player ${G.players.length + 1}`);
            console.log("Updated players list:", G.players);
        },
    },
};

export default MyGame;
