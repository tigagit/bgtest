// src/game/Board.js
import React, { useState } from 'react';
import { Client } from 'boardgame.io/react';
import MyGame from './Game';

const Board = ({ G, ctx, moves }) => {
    const [update, setUpdate] = useState(0); // Used to trigger re-render

    const addPlayerHandler = () => {
        moves.addPlayer();
        setUpdate((prev) => prev + 1); // Trigger re-render after move
    };

    console.log("Rendering Board component with players:", G.players);

    return (
        <div>
            <h1>Simple Game</h1>
            <button onClick={addPlayerHandler}>Add Player</button>
            <p>Players: {G.players && G.players.length > 0 ? G.players.join(', ') : 'No players added yet'}</p>
        </div>
    );
};

const GameClient = Client({
    game: MyGame,
    board: Board,
    debug: true,  // This will help us see state changes in the browser console
});

export default GameClient;
