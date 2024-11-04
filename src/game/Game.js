// src/game/Board.js
import React from 'react';
import { Client } from 'boardgame.io/react';
import MyGame from './Game';

// Define the board component, which represents the UI for your game
const Board = ({ G, ctx, moves }) => {
    return (
        <div>
            <h1>Simple Game</h1>
            <button onClick={() => moves.addPlayer()}>Add Player</button>
            {/* Display the list of players. If no players exist, display a placeholder message */}
            <p>Players: {G.players.length > 0 ? G.players.join(', ') : 'No players added yet'}</p>
        </div>
    );
};

// Define the game client, which ties together the game logic and board UI
const GameClient = Client({
    game: MyGame,
    board: Board,
    // Optional settings can be added here if needed, like multiplayer configurations
});

export default Game
