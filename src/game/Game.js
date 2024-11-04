// src/game/Game.js
const MyGame = {
    setup: () => ({ players: [] }),

    moves: {
        addPlayer(G, ctx) {
            const newPlayerID = `Player ${G.players.length + 1}`;
            G.players.push(newPlayerID);
        },
    },
};

export default MyGame;
