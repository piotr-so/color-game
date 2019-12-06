import React from 'react';

import { Button } from './custom-button.styled';


const CustomButton = ({children, func, otherProps}) => (
    <Button onClick={func} {...otherProps}>
        {children}
    </Button>
)

export default CustomButton;