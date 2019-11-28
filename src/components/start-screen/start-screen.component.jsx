import React from 'react';
import { Input, Label } from './start-screen.styled';

const StartScreen = ({ gameProperties, changeGameProperties, startGame }) => {
    const { rows, columns } = gameProperties;
    return (
        <div>
            <Label htmlFor='rows'>Number of rows (min: 2)</Label>
            <Input
                type='number'
                id='rows'
                name='rows'
                min='2'
                value={rows}
                onChange={changeGameProperties}
            >
            </Input>
            <Label htmlFor='columns'>Number of columns (min: 2)</Label>
            <Input
                type='number'
                id='columns'
                name='columns'
                min='2'
                value={columns}
                onChange={changeGameProperties}
            >
            </Input>
            <button onClick={startGame}>Start game</button>
        </div>
    )
}

export default StartScreen;