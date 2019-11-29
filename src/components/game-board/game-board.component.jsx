import React, { useState } from 'react';

import Cell from '../cell/cell.component';

import { StyledBoard } from './game-board.styled';

import { createGameBoard } from '../utils/utils';
const GameBoard = ({ gameProperties: { rows, columns } }) => {

    const [newBoard, setNewBoard] = useState(createGameBoard(rows, columns));

    // static development variables for colors
    const colorsArray = ['198', '43', '152'];
    const testColorArray = [
        [[0, 0, '152'], [0, 1, '152'], [0, 2, '43']],
        [[1, 0, '152'], [1, 1, '152'], [1, 2, '152']],
        [[2, 0, '43'], [2, 1, '198'], [2, 2, '198']],
        [[3, 0, '198'], [3, 1, '43'], [3, 2, '198']]
    ];
    //

    // Hex test variables
    // const test = randomColorArray();
    // const colorsArray = [randomHexColorGen(), randomHexColorGen(), randomHexColorGen(), randomHexColorGen()];


    const checkSurroundingCells = (event, eventTargetPosX, eventTargetPosY, eventTargetColor) => {

        // const surroundingsColors = [[2,2,'198'], [1,2,'198'], [0,1,'43']];
        // const test = [0,1,'43'];

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

        const surroundingsColors = [[eventTargetPosX, eventTargetPosY, eventTargetColor]];

        //check surroundings existence
        const scan = (targetPosX, targetPosY, targetColor) => {
            const up = targetPosX - 1;
            const down = targetPosX + 1;
            const left = targetPosY - 1;
            const right = targetPosY + 1;
            console.log(testColorArray[targetPosX][targetPosY]);

            // *** REFACTORING ***
            // const checkUpOrDown = (direction) => {
            //     if (testColorArray[up] !== undefined) {
            //         console.log(`${up} jest`)
            //         //above element exists

            //         if (testColorArray[up][targetPosY][2] === targetColor) {
            //             //color matches

            //             const benchmark = testColorArray[up][targetPosY];

            //             if (!checkELemExistence(surroundingsColors, benchmark)) {
            //                 //if the same value doesn't exist push new element to array

            //                 surroundingsColors.push([up, targetPosY, targetColor])
            //             }
            //         }
            // }
            // ***

            if (testColorArray[up] !== undefined) {
                //above element exists

                if (testColorArray[up][targetPosY][2] === targetColor) {
                    //color matches
                    console.log(`góra istnieje i ma równy kolor`)


                    const benchmark = testColorArray[up][targetPosY];

                    if (!checkELemExistence(surroundingsColors, benchmark)) {
                        //if the same value doesn't exist push new element to array

                        surroundingsColors.push([up, targetPosY, targetColor])
                    }
                }
                else console.log('góra istnieje - kolor inny')
            }
            else console.log('góra nie istnieje');

            if (testColorArray[down] !== undefined) {
                //below element exists

                if (testColorArray[down][targetPosY][2] === targetColor) {
                    //color matches
                    console.log(`dół istnieje i ma równy kolor`)


                    const benchmark = testColorArray[down][targetPosY];

                    if (!checkELemExistence(surroundingsColors, benchmark)) {
                        //if the same value doesn't exist push new element to array

                        surroundingsColors.push([down, targetPosY, targetColor])
                    }
                }
                else console.log('dół istnieje - kolor inny')

                // console.log('dół jest')
                // if (testColorArray[down][targetPosY][2] === targetColor) {
                //     surroundingsColors.push([down, targetPosY, targetColor]);
                // }
            }
            else console.log('dół nie istnieje');

            if (testColorArray[targetPosX][left] !== undefined) {
                //left element exists

                if (testColorArray[targetPosX][left][2] === targetColor) {
                    //color matches
                    console.log(`lewy istnieje i ma równy kolor`)

                    const benchmark = testColorArray[targetPosX][left];

                    if (!checkELemExistence(surroundingsColors, benchmark)) {
                        //if the same value doesn't exist push new element to array

                        surroundingsColors.push([targetPosX, left, targetColor])
                    }
                }
                else console.log('lewy istnieje - kolor inny')


                // if (testColorArray[targetPosX][left][2] === targetColor) {
                //     surroundingsColors.push([targetPosX, left, targetColor]);
                // }
            }
            else console.log('lewy nie istnieje');

            if (testColorArray[targetPosX][right] !== undefined) {
                //right element exists

                if (testColorArray[targetPosX][right][2] === targetColor) {
                    //color matches
                    console.log(`prawy istnieje i ma równy kolor`)

                    const benchmark = testColorArray[targetPosX][right];

                    if (!checkELemExistence(surroundingsColors, benchmark)) {
                        //if the same value doesn't exist push new element to array

                        surroundingsColors.push([targetPosX, right, targetColor])
                    }
                }
                else console.log('prawy istnieje - kolor inny')
            }
            else console.log('prawy nie istnieje');

            return surroundingsColors;
        }

        scan(eventTargetPosX, eventTargetPosY, eventTargetColor);
        console.log('Skanowanie #1');
        if (surroundingsColors.length === 1) return console.log('nothing to change');
        else {
            for (let i = 1; i < surroundingsColors.length; i++) {
                scan(surroundingsColors[i][0], surroundingsColors[i][1], surroundingsColors[i][2]);
                console.log('Skanowanie #' + (i+1))
            }
        }
        console.log(surroundingsColors);



        //
    }

    return (
        <div>
            <div>GameBoard</div>
            <StyledBoard rows={rows} cols={columns}>
                {testColorArray.map(
                    row => row.map(
                        (cell, idx) => (
                            <Cell
                                key={idx}
                                posX={cell[0]}
                                posY={cell[1]}
                                randColor={
                                    cell[2]
                                }
                                onClickFn={event => checkSurroundingCells(event, cell[0], cell[1], cell[2])}
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