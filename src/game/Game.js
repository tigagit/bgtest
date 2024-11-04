// src/game/Game.js
const MyGame = {
    setup: () => {
        console.log("Game setup called. Initializing players array.");
        return { players: [] };
    },

    moves: {
        addPlayer(G, ctx) {
            console.log("Current state of G:", G); // Log G to see if players exist
            if (!G.players) {
                console.log("G.players is undefined, initializing now");
                G.players = [];
            }
            const newPlayerID = `Player ${G.players.length + 1}`;
            console.log("addPlayer move called, adding:", newPlayerID);
            G.players.push(newPlayerID);
            console.log("Updated players list:", G.players);
        },
    },
};

export default MyGame;
