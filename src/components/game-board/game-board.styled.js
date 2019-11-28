import styled from 'styled-components/macro';

export const StyledBoard = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.rows},
        100px
    );
    grid-template-columns: repeat(
        ${props => props.cols},
        100px
    );
`;