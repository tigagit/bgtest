// src/game/Board.js
import React from 'react';
import { Client } from 'boardgame.io/react';
import MyGame from './Game';

const Board = ({ G, moves }) => {
    const handleAddPlayer = () => {
        console.log("Add Player button clicked");
        moves.addPlayer();
    };

    return (
        <div>
            <h1>Simple Game</h1>
            <button onClick={handleAddPlayer}>Add Player</button>
            <p>Players: {G.players.length > 0 ? G.players.join(', ') : 'No players added yet'}</p>
        </div>
    );
};

const GameClient = Client({
    game: MyGame,
    board: Board,
});

export default GameClient;
