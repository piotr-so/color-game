export const createGameBoard = (rows, cols) => {
    const intRows = parseInt(rows);
    const intCols = parseInt(cols);
    return (
        Array.from(Array(intRows), (n, k) =>
            new Array(intCols).fill().map((val, idx) => [k, idx]))
    )
}

// Hex variant random color generator (experimental)
// if generated hex value will be shorter than 6, slice(-6) will return value with additional '0's
// example output => 5b393  '000000' + (5b393).slice(-6) =>  05b393

// export const randomHexColorGen = () => '#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

// HSL value generator 
export const randomHslHueVal = () => Math.floor(Math.random()*360).toString();

export const randomColorArray = () => {
    const firstColor = randomHslHueVal();
    let colorArray = [];
    colorArray.push(firstColor);

    while(colorArray.length < 3) {
        let newColorValue = randomHslHueVal();

        const checkValue = (element) => (element !== newColorValue && (element - newColorValue > 40 || element - newColorValue < -40))
        if (colorArray.every(checkValue)){
            colorArray.push(newColorValue);
        }
        else {
            newColorValue = randomHslHueVal();
        }
    }
    return colorArray;
}