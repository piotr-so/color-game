import styled, {keyframes} from 'styled-components/macro';

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
            minmax(40px, 1fr)
           
        );
        grid-template-columns: repeat(
            ${props => props.cols},
            minmax(40px, 1fr)
        ); 
    }
`;

export const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
}
`;

export const ResignButton = styled.button`
    font-size: 24px;
    font-family: 'Orbitron', Arial, sans-serif;
    background: transparent;
    border: 1px solid black;
    padding: 5px 20px;
    margin: 20px 0;

    &:hover {
        cursor: pointer;
        animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
        
    }
`;
