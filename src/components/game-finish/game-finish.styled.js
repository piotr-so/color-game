import styled from 'styled-components/macro';

export const GameFinish = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255, 0.8);
`;

export const GameOver = styled.h1`
    font-family: 'Orbitron', Arial, sans-serif;
`;

export const Summary = styled.div`
    font-family: 'Orbitron', Arial, sans-serif;
    > * {
        line-height: 30px;
        height: 30px;
        margin: 10px 0;
    }
`;

export const Value = styled.span`
    font-size: 24px;
    font-weight: bold;
`;