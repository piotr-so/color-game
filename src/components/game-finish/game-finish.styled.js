import styled, { keyframes } from 'styled-components/macro';

export const GameFinishModal = styled.div`
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

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 70vh;
    @media (max-width: 480px) {
        height: 75vh; 
    }
    text-align: center;
    margin: 0 auto;
    background-color: white;
    border-radius: 15px;
    /* box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue; */
    &::before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -5px;
        left: -5px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        z-index: -1;
        filter: blur(5px);
        opacity: 1;
        transition: opacity .3s ease-in-out;
        border-radius: 15px;
    }


    &::after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: white;
        left: 0;
        top: 0;
        border-radius: 10px;
    }


    @media (max-width: 480px) {
        width: 80%;
    }
`;

export const GameOver = styled.h1`
    font-family: 'Orbitron';
`;

export const Summary = styled.div`
    font-family: 'Orbitron';
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

export const PlayAgain = styled.button`
    position: relative;
    z-index: 0;
    width: 220px;
    height: 50px;
    font-family: 'Orbitron';
    font-weight: 700;
    font-size: 20px;
    color: black;
    border-width: 2px;
    border-style: solid;
    border-image: 0;
    border-image-slice: 0;
    border-color: black;
    outline: none;
    background: transparent;
    cursor: pointer;
    margin: 20px auto;

    &:hover {
        border-image: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        border-image-slice: 1;
        border-color: transparent;
    }

    @media (max-width: 480px) {
        border-width: 1px;
        &:hover {
            border-image: 0;
            border-image-slice: 0;
            border-color: black;
        }
    }
`;