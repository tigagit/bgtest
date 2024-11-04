// src/game/Board.js
import React from 'react';
import { Client } from 'boardgame.io/react';
import MyGame from './Game';

const Board = ({ G, ctx, moves }) => {
    console.log("Rendering Board component with players:", G.players); // Log the players array

    return (
        <div>
            <h1>Simple Game</h1>
            <button onClick={() => moves.addPlayer()}>Add Player</button>
            <p>Players: {G.players && G.players.length > 0 ? G.players.join(', ') : 'No players added yet'}</p>
        </div>
    );
};

const GameClient = Client({
    game: MyGame,
    board: Board,
});

export default GameClient;
