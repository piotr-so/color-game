import React, { useState } from 'react';

import Cell from '../cell/cell.component';
import UserScore from '../userScore/userScore.component';
import GameFinishModal from '../game-finish/game-finish.component';

import { StyledBoard, ResignButton, BoardOverflowControler } from './game-board.styled';

import { createGameBoard, checkSurroundingCells, removeColorFromFoundCells, fillEmptyColorCells } from '../utils/game-board.utils';
const GameBoard = ({ gameProperties: { rows, columns, difficulty }, switchScreen }) => {

    const [gameBoard, setGameBoard] = useState(createGameBoard(rows, columns, difficulty));
    const [areAnyMovesLeft, setAreAnyMovesLeft] = useState(true);
    const [score, setScore] = useState({
        userScore: 0,
        addedScore: ``,
        addedScoreCssHelper: true,
        clicks: 0
    });

    const [preventAnotherClick, setPreventAnotherClick] = useState(false);

    const delayValuesForBoardIterations = {
        transparentCellsAppear: 100,
        subsequentPulls: 50
    }

    const handleCellClick = (event, eventTargetPosX, eventTargetPosY, eventTargetColor, stateBoard, isBlocked) => {
        if (!isBlocked) setPreventAnotherClick(true);
        else return;

        // check if surrounding cells match color with target
        // if there are matching cells -> fill array with them, otherwise => undefined
        const foundCellsArray = checkSurroundingCells(eventTargetPosX, eventTargetPosY, eventTargetColor, stateBoard);

        if (foundCellsArray !== undefined) {
            // #1 Remove color for found elements and update state array
            const boardWithcolorEmptiedCells = removeColorFromFoundCells(foundCellsArray, stateBoard);
            setGameBoard(boardWithcolorEmptiedCells);
            setScore({
                ...score,
                userScore: score.userScore + foundCellsArray.length,
                addedScore: `+${foundCellsArray.length}`,
                addedScoreCssHelper: !score.addedScoreCssHelper,
                clicks: score.clicks + 1
            })

            const timeoutThisFn = (delayVal) => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(fillEmptyColorCells(gameBoard, difficulty)), delayVal);
                });
            }
            const dispatchFillEmptyColorCells = async (delayVal) => {

                // sequence of switching cells colors
                const updatedGameBoardArr = await timeoutThisFn(delayVal);

                if (updatedGameBoardArr[1] > 0) {
                    setGameBoard(updatedGameBoardArr[0]);
                    // subsequent iterations with diffrent from first delay
                    dispatchFillEmptyColorCells(delayValuesForBoardIterations.subsequentPulls);
                }
                else if (updatedGameBoardArr[1] === 0) {
                    // check if there are any moves left for player
                    const checkBoardForPossibleMoves = (arrayToCheckAfterUpdate) => {

                        const checkingLoop = (arrayToCheck) => {
                            let possibilities = undefined;
                            for (let i = 0; i < arrayToCheck.length; i++) {
                                for (let y = 0; y < arrayToCheck[i].length - 1; y++) {
                                    if (arrayToCheck[i][y][2] === arrayToCheck[i][y + 1][2]) possibilities = true;
                                }
                                if (possibilities === true) break;
                            }
                            if (possibilities === true) return true;
                            else return false;
                        }

                        const transposeArray = (array) => {
                            return array[0].map((col, i) => array.map(row => row[i]));
                        }
                        const transposedArrayToCheck = transposeArray(arrayToCheckAfterUpdate);

                        const checkedRows = checkingLoop(arrayToCheckAfterUpdate);
                        const checkedCols = checkingLoop(transposedArrayToCheck);
                        if (checkedRows === true || checkedCols === true) {
                            return;
                        }
                        else {
                            setAreAnyMovesLeft(false);
                        };
                    }
                    checkBoardForPossibleMoves(updatedGameBoardArr[0]);

                    setPreventAnotherClick(false);
                }
            };
            // #2 Begin sequence of switching and filling colors (value of first delay)
            dispatchFillEmptyColorCells(delayValuesForBoardIterations.transparentCellsAppear);
        }
        else {
            setPreventAnotherClick(false);
            return;
        }
    }

    return (
        <>
            <UserScore score={score} />
            <BoardOverflowControler rows={rows}>
                <StyledBoard rows={rows} cols={columns}>
                    {gameBoard !== undefined && gameBoard.map(
                        row => row.map(
                            (cell, idx) => (
                                <Cell
                                    key={idx}
                                    posX={cell[0]}
                                    posY={cell[1]}
                                    randColor={cell[2]}
                                    onClickFn={
                                        event => handleCellClick(event, cell[0], cell[1], cell[2], gameBoard, preventAnotherClick)
                                    }
                                />

                            )
                        )
                    )
                    }
                </StyledBoard>
            </BoardOverflowControler>
            <ResignButton onClick={() => setAreAnyMovesLeft(false)}>Give up?</ResignButton>
            {!areAnyMovesLeft ? (
                <GameFinishModal score={score} switchScreen={switchScreen} />
            )
                : undefined
            }
        </>
    )
}

export default GameBoard;