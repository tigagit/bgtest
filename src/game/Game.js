// src/game/Game.js
const MyGame = {
    setup: () => ({ players: [] }),

    moves: {
        addPlayer(G, ctx) {
            const newPlayerID = ctx.currentPlayer;
            if (!G.players.includes(newPlayerID)) {
                G.players.push(newPlayerID);
            }
        },
    },
};

export default MyGame;
