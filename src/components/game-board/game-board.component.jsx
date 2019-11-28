import React, { useState } from 'react';

import Cell from '../cell/cell.component';

import { StyledBoard } from './game-board.styled';

import { createGameBoard } from '../utils/utils';
const GameBoard = ({ gameProperties: { rows, columns } }) => {

    const [newBoard, setNewBoard] = useState(createGameBoard(rows, columns));

    // static development variables for colors
    const colorsArray = ['198', '43', '152'];

    // Hex test variables
    // const test = randomColorArray();
    // const colorsArray = [randomHexColorGen(), randomHexColorGen(), randomHexColorGen(), randomHexColorGen()];

    return (
        <div>
            <div>GameBoard</div>
            <StyledBoard rows={rows} cols={columns}>
                {newBoard.map(
                    row => row.map(
                        (cell, idx) => (
                            <Cell
                                key={idx}
                                posX={cell[0]}
                                posY={cell[1]}
                                randColor={
                                    colorsArray[Math.floor(Math.random() * colorsArray.length)]
                                }
                            />
                        )
                    )
                )}
            </StyledBoard>
        </div>
    )
}

export default GameBoard;