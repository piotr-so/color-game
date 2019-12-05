export const createGameBoard = (rows, cols, difficulty) => {
    const intRows = parseInt(rows);
    const intCols = parseInt(cols);

    const generateArray = () =>
        Array.from(Array(intRows), (n, k) =>
            new Array(intCols).fill().map((val, idx) =>
                [k, idx, colorsArray[Math.floor(Math.random() * difficulty)]]
            )
        )

    let createdArray = generateArray();

    while (!checkBoardForPossibleMoves(createdArray)) {
        createdArray = generateArray();
    }

    return createdArray;
}

const checkBoardForPossibleMoves = (arrayToCheckAfterUpdate) => {

    const checkingLoop = (arrayToCheck) => {
        let possibilities = undefined;
        for (let i = 0; i < arrayToCheck.length; i++) {
            for (let y = 0; y < arrayToCheck[i].length - 1; y++) {
                if (arrayToCheck[i][y][2] === arrayToCheck[i][y + 1][2]) {
                    possibilities = true;
                }
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
    // console.log(checkedRows);
    // console.log(checkedCols);
    if (checkedRows === true || checkedCols === true) {
        // console.log(`there is possiblity in rows-${checkedRows} - cols-${checkedCols}`)
        return true;
    }
    else {
        // console.log('no possibilities');
        return false;
    };
}

export const colorsArray = ['0', '27', '59', '103', '170', '229', '268', '312'];

// Hex variant random color generator (experimental)
// if generated hex value will be shorter than 6, slice(-6) will return value with additional '0's
// example output => 5b393  '000000' + (5b393).slice(-6) =>  05b393

// export const randomHexColorGen = () => '#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

// HSL value generator 
export const randomHslHueVal = () => Math.floor(Math.random() * 360).toString();

export const randomColorArray = () => {
    const firstColor = randomHslHueVal();
    let colorArray = [];
    colorArray.push(firstColor);

    while (colorArray.length < 3) {
        let newColorValue = randomHslHueVal();

        const checkValue = (element) => (element !== newColorValue && (element - newColorValue > 40 || element - newColorValue < -40))
        if (colorArray.every(checkValue)) {
            colorArray.push(newColorValue);
        }
        else {
            newColorValue = randomHslHueVal();
        }
    }
    return colorArray;
}