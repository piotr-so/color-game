import React, { useState, useEffect } from 'react';

import Cell from '../cell/cell.component';

import { StyledBoard } from './game-board.styled';

import { createGameBoard } from '../utils/utils';
const GameBoard = ({ gameProperties: { rows, columns } }) => {

    const [newBoard, setNewBoard] = useState(createGameBoard(rows, columns));


    // static development variables for colors
    const colorsArray = ['198', '43', '152', '70', '200', '250'];
    const testColorArray = [
        [[0, 0, '152'], [0, 1, '152'], [0, 2, '43']],
        [[1, 0, '152'], [1, 1, '152'], [1, 2, '152']],
        [[2, 0, '43'], [2, 1, '198'], [2, 2, '198']],
        [[3, 0, '198'], [3, 1, '43'], [3, 2, '198']]
    ];

    const [testBoard, setTestBoard] = useState(createGameBoard(rows, columns));

    //

    // Hex test variables
    // const test = randomColorArray();
    // const colorsArray = [randomHexColorGen(), randomHexColorGen(), randomHexColorGen(), randomHexColorGen()];

    const handleCellClick = (event, eventTargetPosX, eventTargetPosY, eventTargetColor, stateBoard) => {

        // check if surrounding cells match color with target
        // if there are matching cells -> fill array with them, otherwise => undefined
        const foundCellsArray = checkSurroundingCells(eventTargetPosX, eventTargetPosY, eventTargetColor, stateBoard);

        if (foundCellsArray !== undefined) {
            // #1 Change color for found elements to grey and update state array
            const boardWithcolorEmptiedCells = greyOutFoundCells(foundCellsArray, stateBoard);
            setTestBoard(boardWithcolorEmptiedCells);

            const timeoutThisFn = (delayVal) => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(fillEmptyColorCells(testBoard)), delayVal);
                });
            }
            const dispatchFillEmptyColorCells = async (delayVal) => {
                console.log('Waiting for status');
                const updatedGameBoardArr = await timeoutThisFn(delayVal);
                if (updatedGameBoardArr[1] > 0) {
                    setTestBoard(updatedGameBoardArr[0]);
                    dispatchFillEmptyColorCells(100);
                }
                else return console.log('finished');
            };
            // #2 Begin sequence of switching and filling colors
            dispatchFillEmptyColorCells(500);
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

            // *** REFACTORING ***
            // const checkUpOrDown = (direction) => {
            //     if (stateBoard[up] !== undefined) {
            //         console.log(`${up} jest`)
            //         //above element exists

            //         if (stateBoard[up][targetPosY][2] === targetColor) {
            //             //color matches

            //             const benchmark = stateBoard[up][targetPosY];

            //             if (!checkELemExistence(surroundingsColors, benchmark)) {
            //                 //if the same value doesn't exist push new element to array

            //                 surroundingsColors.push([up, targetPosY, targetColor])
            //             }
            //         }
            // }
            // ***

            if (stateBoard[up] !== undefined) {
                //above element exists

                if (stateBoard[up][targetPosY][2] === targetColor) {
                    //color matches
                    console.log(`góra istnieje i ma równy kolor`)


                    const benchmark = stateBoard[up][targetPosY];

                    if (!checkELemExistence(surroundingsColors, benchmark)) {
                        //if the same value doesn't exist push new element to array

                        surroundingsColors.push([up, targetPosY, targetColor])
                    }
                }
                else console.log('góra istnieje - kolor inny')
            }
            else console.log('góra nie istnieje');

            if (stateBoard[down] !== undefined) {
                //below element exists

                if (stateBoard[down][targetPosY][2] === targetColor) {
                    //color matches
                    console.log(`dół istnieje i ma równy kolor`)


                    const benchmark = stateBoard[down][targetPosY];

                    if (!checkELemExistence(surroundingsColors, benchmark)) {
                        //if the same value doesn't exist push new element to array

                        surroundingsColors.push([down, targetPosY, targetColor])
                    }
                }
                else console.log('dół istnieje - kolor inny')

                // console.log('dół jest')
                // if (stateBoard[down][targetPosY][2] === targetColor) {
                //     surroundingsColors.push([down, targetPosY, targetColor]);
                // }
            }
            else console.log('dół nie istnieje');

            if (stateBoard[targetPosX][left] !== undefined) {
                //left element exists

                if (stateBoard[targetPosX][left][2] === targetColor) {
                    //color matches
                    console.log(`lewy istnieje i ma równy kolor`)

                    const benchmark = stateBoard[targetPosX][left];

                    if (!checkELemExistence(surroundingsColors, benchmark)) {
                        //if the same value doesn't exist push new element to array

                        surroundingsColors.push([targetPosX, left, targetColor])
                    }
                }
                else console.log('lewy istnieje - kolor inny')


                // if (stateBoard[targetPosX][left][2] === targetColor) {
                //     surroundingsColors.push([targetPosX, left, targetColor]);
                // }
            }
            else console.log('lewy nie istnieje');

            if (stateBoard[targetPosX][right] !== undefined) {
                //right element exists

                if (stateBoard[targetPosX][right][2] === targetColor) {
                    //color matches
                    console.log(`prawy istnieje i ma równy kolor`)

                    const benchmark = stateBoard[targetPosX][right];

                    if (!checkELemExistence(surroundingsColors, benchmark)) {
                        //if the same value doesn't exist push new element to array

                        surroundingsColors.push([targetPosX, right, targetColor])
                    }
                }
                else console.log('prawy istnieje - kolor inny')
            }
            else console.log('prawy nie istnieje');

            // return surroundingsColors array filled with cells matching color with target (result of scan =>)
            return surroundingsColors;
        }
        
        // first element in surroundingsColors array is filled with target position
        const surroundingsColors = [[eventTargetPosX, eventTargetPosY, eventTargetColor]];

        // *** checkSurroundingCells execution start ***
        // #1 Find if there are cells matching color with target
        scan(eventTargetPosX, eventTargetPosY, eventTargetColor);
        console.log('Skanowanie #1');

        // #2 if there are no cells matching color with target then checkSurroundingCells => undefined
        // -- surroundingsColors.length will match at least 1, because array is filled with target --
        if (surroundingsColors.length === 1) return;
        // #3 else fill array with cells matching color with target
        else {
            for (let i = 1; i < surroundingsColors.length; i++) {
                scan(surroundingsColors[i][0], surroundingsColors[i][1], surroundingsColors[i][2]);
                console.log('Skanowanie #' + (i + 1))
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
            newBoard[posX][posY][2] = 'grey';
        }
        return newBoard;
    }

    const fillEmptyColorCells = (testBoardFromState) => {
        const updatedGameBoard = [...testBoardFromState];
        let colorEmptiedCellsArray = [];
        let cellsToPullColorFrom = [];

        for (let i = 0; i < updatedGameBoard.length; i++) {

            for (let y = 0; y < updatedGameBoard[i].length; y++) {
                if (updatedGameBoard[i][y][2] === 'grey') {
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
                    const newColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];

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
                    newBoardAfterPulls[posXProvider][posYProvider][2] = 'grey';
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
            return [0];
        }
    }

    return (
        <div>
            <div>GameBoard</div>
            <StyledBoard rows={rows} cols={columns}>
                {testBoard.map(
                    row => row.map(
                        (cell, idx) => (
                            <Cell
                                key={idx}
                                posX={cell[0]}
                                posY={cell[1]}
                                randColor={
                                    cell[2]
                                }
                                onClickFn={event => handleCellClick(event, cell[0], cell[1], cell[2], testBoard)}
                            />
                        )
                    )
                )
                }
                {/* {newBoard.map(
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
                )} */}
            </StyledBoard>
        </div>
    )
}

export default GameBoard;