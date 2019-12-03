import styled from 'styled-components/macro';

export const BoardWrapper = styled.div`
    
`;

export const StyledBoard = styled.div`
    display: grid;
    justify-content: center;
    padding: 10px;
    border-radius: 15px;
    grid-template-rows: repeat(
        ${props => props.rows},
        minmax(40px, 50px)
    );
    grid-template-columns: repeat(
        ${props => props.cols},
        minmax(40px, 50px)
    );
    /* background: #a3a3a3; */
    background:
    radial-gradient(black -20%, transparent 16%) 0 0,
    radial-gradient(black -20%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
    background-color:#a3a3a3;
    background-size:16px 16px;
    grid-gap: 3px;

    @media (max-width: 480px) {
        margin: 0 10px;
        justify-content: center;
        grid-template-rows: repeat(
            ${props => props.rows},
            40px
           
        );
        grid-template-columns: repeat(
            ${props => props.cols},
            minmax(30px, 65px)
        ); 
    }
`;