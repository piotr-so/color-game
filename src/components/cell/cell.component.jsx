import React from 'react';

import { StyledCell } from './cell.styled';

const Cell = ({ posX, posY, randColor }) => {

    return (
        <StyledCell color={randColor}>
            [{posX}, {posY}]
        </StyledCell>
    )
}

export default Cell;