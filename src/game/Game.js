// src/game/Game.js
const MyGame = {
    setup: () => ({ players: [] }),

    moves: {
        addPlayer(G, ctx) {
            const newPlayerID = `Player ${G.players.length + 1}`;
            console.log("addPlayer move called, adding:", newPlayerID);
            G.players.push(newPlayerID);
            console.log("Updated players list:", G.players);
        },
    },
};

export default MyGame;
