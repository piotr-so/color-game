import React from 'react';

import { Wrapper } from './styled-container.styled';


const StyledContainer = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export default StyledContainer;