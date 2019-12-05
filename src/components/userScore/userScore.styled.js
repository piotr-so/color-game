import styled, {keyframes} from 'styled-components/macro';
import {RainbowBorder} from '../styled-container/styled-container.styled';

export const UserScoreWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 250px;
    max-width: 100%;
    height: 70px;
    font-size: 32px;
    font-family: 'Orbitron', Arial, sans-serif;
    margin: 20px 10px;
    border-radius: 15px;
    border: 1px solid transparent;

    ${RainbowBorder}
`;

const slideUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(0px);
    }
    20% {
        opacity: 1;
        transform: translateY(-25px);
    }
    85% {
        opacity: 1;
        transform: translateY(-25px);  
    }
    100% {
        opacity: 0;
        transform: translateY(-25px);
    }
`;

export const Score = styled.div`
    position: relative;
    text-align: center;

    span {
        display: inline-block;
        min-width: 70px;
    }
`;

export const AddedScore = styled.span`
    position: absolute;
    font-size: 24px;
    right: 0;
    color: gold;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    opacity: 0;
    animation: ${slideUp} 1s ease-in-out;
`;