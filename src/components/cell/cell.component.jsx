import React from 'react';

import { StyledCell } from './cell.styled';

const Cell = ({ posX, posY, randColor, onClickFn }) => {

    return (
        <StyledCell color={randColor} onClick={onClickFn} posX={posX} posY={posY}>
            [{posX}, {posY}]
        </StyledCell>
    )
}

export default Cell;