import React, { useState, useEffect } from 'react';

import Cell from '../cell/cell.component';
import UserScore from '../userScore/userScore.component';
import GameFinishModal from '../game-finish/game-finish.component';

import { StyledBoard, ResignButton } from './game-board.styled';

import { createGameBoard, colorsArray } from '../utils/utils';
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
        greyCellsAppear: 100,
        subsequentPulls: 50
    }

    const emptiedCellColor = `#a3a3a3`;
    //

    useEffect(() => {
        if (!areAnyMovesLeft) console.log("game finished - no more moves left")
    }, [areAnyMovesLeft]);

    // Hex test variables
    // const test = randomColorArray();
    // const colorsArray = [randomHexColorGen(), randomHexColorGen(), randomHexColorGen(), randomHexColorGen()];

    const handleCellClick = (event, eventTargetPosX, eventTargetPosY, eventTargetColor, stateBoard, isBlocked) => {
        if (!isBlocked) setPreventAnotherClick(true);
        else return;

        // check if surrounding cells match color with target
        // if there are matching cells -> fill array with them, otherwise => undefined
        const foundCellsArray = checkSurroundingCells(eventTargetPosX, eventTargetPosY, eventTargetColor, stateBoard);

        if (foundCellsArray !== undefined) {
            // #1 Change color for found elements to grey and update state array
            const boardWithcolorEmptiedCells = greyOutFoundCells(foundCellsArray, stateBoard);
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
                    setTimeout(() => resolve(fillEmptyColorCells(gameBoard)), delayVal);
                });
            }
            const dispatchFillEmptyColorCells = async (delayVal) => {
                console.log('Waiting for status');

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
                                    // console.log(`iteration: row-${i} col-${y}`);
                                    // console.log(arrayToCheck[y][2]);
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
                        console.log(checkedRows);
                        console.log(checkedCols);
                        if (checkedRows === true || checkedCols === true) {
                            console.log(`there is possiblity in rows-${checkedRows} - cols-${checkedCols}`)
                        }
                        else {
                            console.log('no possibilities');
                            setAreAnyMovesLeft(false);
                        };
                    }
                    checkBoardForPossibleMoves(updatedGameBoardArr[0]);

                    setPreventAnotherClick(false);
                    return console.log('finished');
                }
            };
            // #2 Begin sequence of switching and filling colors (value of first delay)
            dispatchFillEmptyColorCells(delayValuesForBoardIterations.greyCellsAppear);
        }
        else {
            setPreventAnotherClick(false);
            return;
        }
    }


    const checkSurroundingCells = (eventTargetPosX, eventTargetPosY, eventTargetColor, stateBoard) => {

        const haveSameValues = (arr1, arr2) => {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    // different value exist in two arrays value comparison
                    return false;
                }
            }
            // two arrays values are the same
            return true;
        }

        const checkELemExistence = (testedArray, benchmarkArr) => {
            for (let arrElem = 0; arrElem < testedArray.length; arrElem++) {
                if (haveSameValues(testedArray[arrElem], benchmarkArr)) {
                    // element exists
                    return true
                }
            }
            // element doesn't exist
            return false;
        }

        // scaning function to find cells matching color with target
        const scan = (targetPosX, targetPosY, targetColor) => {
            const up = targetPosX - 1;
            const down = targetPosX + 1;
            const left = targetPosY - 1;
            const right = targetPosY + 1;


            const checkUpOrDown = (direction) => {
                if (stateBoard[direction] !== undefined) {
                    //above or below element exists

                    if (stateBoard[direction][targetPosY][2] === targetColor) {
                        //color matches

                        const benchmark = stateBoard[direction][targetPosY];

                        if (!checkELemExistence(surroundingsColors, benchmark)) {
                            //if the same value doesn't exist push new element to array

                            surroundingsColors.push([direction, targetPosY, targetColor])
                        }
                    }
                }
            }
            const checkLeftOrRight = (direction) => {
                if (stateBoard[targetPosX][direction] !== undefined) {
                    //left or right element exists

                    if (stateBoard[targetPosX][direction][2] === targetColor) {
                        //color matches
                        // console.log(`lewy istnieje i ma równy kolor`)

                        const benchmark = stateBoard[targetPosX][direction];

                        if (!checkELemExistence(surroundingsColors, benchmark)) {
                            //if the same value doesn't exist push new element to array

                            surroundingsColors.push([targetPosX, direction, targetColor])
                        }
                    }
                }
            }

            checkUpOrDown(up);
            checkUpOrDown(down);
            checkLeftOrRight(left);
            checkLeftOrRight(right);

            // return surroundingsColors array filled with cells matching color with target (result of scan =>)
            return surroundingsColors;
        }

        // first element in surroundingsColors array is filled with target position
        const surroundingsColors = [[eventTargetPosX, eventTargetPosY, eventTargetColor]];

        // *** checkSurroundingCells execution start ***
        // #1 Find if there are cells matching color with target
        scan(eventTargetPosX, eventTargetPosY, eventTargetColor);
        // console.log('Skanowanie #1');

        // #2 if there are no cells matching color with target then checkSurroundingCells => undefined
        // -- surroundingsColors.length will match at least 1, because array is filled with target --
        if (surroundingsColors.length === 1) return;
        // #3 else fill array with cells matching color with target
        else {
            for (let i = 1; i < surroundingsColors.length; i++) {
                scan(surroundingsColors[i][0], surroundingsColors[i][1], surroundingsColors[i][2]);
                // console.log('Skanowanie #' + (i + 1))
            }
        }
        // #4 checkSurroundingCells => filled surroundingsColors array
        return surroundingsColors;
        //
    }

    const greyOutFoundCells = (foundElementsArray, stateBoard) => {

        let newBoard = [...stateBoard];

        for (let i = 0; i < foundElementsArray.length; i++) {
            const posX = foundElementsArray[i][0];
            const posY = foundElementsArray[i][1];;
            newBoard[posX][posY][2] = emptiedCellColor;
        }
        return newBoard;
    }

    const fillEmptyColorCells = (boardFromState) => {
        const updatedGameBoard = [...boardFromState];
        let colorEmptiedCellsArray = [];
        let cellsToPullColorFrom = [];

        for (let i = 0; i < updatedGameBoard.length; i++) {

            for (let y = 0; y < updatedGameBoard[i].length; y++) {
                if (updatedGameBoard[i][y][2] === emptiedCellColor) {
                    const posX = updatedGameBoard[i][y][0];
                    const posY = updatedGameBoard[i][y][1];
                    // color needed for further replacing 'empty color' in last iteration
                    const color = updatedGameBoard[i][y][2];
                    colorEmptiedCellsArray.push([posX, posY, color]);
                    if (posX - 1 >= 0) {
                        cellsToPullColorFrom.push([posX - 1, posY])
                    }
                }

            }
            // if it finds 'empty color' cells in this iteration, but at the top lvl (no cells to pull from above) => generate colors for them
            if (colorEmptiedCellsArray.length > 0 && cellsToPullColorFrom.length === 0) {
                let newBoardAfterColorChange = updatedGameBoard;

                for (let i = 0; i < colorEmptiedCellsArray.length; i++) {
                    const posX = colorEmptiedCellsArray[i][0];
                    const posY = colorEmptiedCellsArray[i][1];
                    const newColor = colorsArray[Math.floor(Math.random() * difficulty)];

                    newBoardAfterColorChange[posX][posY][2] = newColor;
                }
                // break updatedGameBoard row iteration
                break;
            }

            // if after this iteration (row), elements to pull exist => pull
            if (cellsToPullColorFrom.length > 0) {
                let newBoardAfterPulls = updatedGameBoard;

                for (let i = 0; i < cellsToPullColorFrom.length; i++) {
                    const posXReceiver = colorEmptiedCellsArray[i][0];
                    const posYReceiver = colorEmptiedCellsArray[i][1];
                    const posXProvider = cellsToPullColorFrom[i][0];
                    const posYProvider = cellsToPullColorFrom[i][1];
                    const providerColor = newBoardAfterPulls[posXProvider][posYProvider][2];

                    newBoardAfterPulls[posXReceiver][posYReceiver][2] = providerColor;
                    newBoardAfterPulls[posXProvider][posYProvider][2] = emptiedCellColor;
                }

                break;
            }
        }

        // console.log('cells to pull');
        // console.log(cellsToPullColorFrom);
        // console.log('color emptied cells')
        // console.log(colorEmptiedCellsArray);

        // if there are still 'emptied color' cells
        if (colorEmptiedCellsArray.length > 0) {
            return [updatedGameBoard, colorEmptiedCellsArray.length];
        }
        // if there are no cells to pull from, and there are no 'emptied color' cells => condition to stop filling
        if (cellsToPullColorFrom.length === 0 && colorEmptiedCellsArray.length === 0) {
            return [updatedGameBoard, 0];
        }
    }

    return (
        <>
            <UserScore score={score} />
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