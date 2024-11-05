// src/game/Game.js
const MyGame = {
    setup: () => ({ players: [] }),

    moves: {
        addPlayer(G, ctx) {
            // Ensure players array is initialized
            if (!Array.isArray(G.players)) {
                G.players = [];
            }

            // Add a new player
            const newPlayer = `Player ${G.players.length + 1}`;
            G.players.push(newPlayer);
            console.log("Updated players list:", G.players);
        },
    },
};

export default MyGame;
