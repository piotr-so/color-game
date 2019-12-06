import styled from 'styled-components/macro';

export const StyledCell = styled.div`
    background-color: ${
        props => props.color !== 'no-color' ? `hsl(${props.color}, 80%, 50%)` 
        : `transparent`
    };
    border-radius: 15px;
    box-shadow: ${props => props.color !== 'no-color' && `1px 1px 2px 0 rgba(0,0,0, 0.5)`};
    cursor: pointer;
`;