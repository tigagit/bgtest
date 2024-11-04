// src/game/Board.js
import React from 'react';
import { Client } from 'boardgame.io/react';
import MyGame from './Game';

const Board = ({ G, ctx, moves }) => {
    return (
        <div>
            <h1>Simple Game</h1>
            <button onClick={() => moves.addPlayer()}>Add Player</button>
            <p>Players: {G.players.join(', ')}</p>
        </div>
    );
};

const GameClient = Client({
    game: MyGame,
    board: Board,
});

export default GameClient;
