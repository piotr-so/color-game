import styled from 'styled-components/macro';

export const StyledCell = styled.div`
    background-color: ${
        props => props.color !== 'grey' ? `hsl(${props.color}, 100%, 50%)` 
        : props.color
    }  
`;