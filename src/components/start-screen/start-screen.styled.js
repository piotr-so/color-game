import styled, { css } from 'styled-components/macro';

export const StartGameWrap = styled.div`
    position: relative;
    margin-top: ${props => props.fixMargin && '65px'};
`;

export const Input = styled.input`
    display: block;
    font-size: 24px;
    text-align: center;
    width: 43px;
    background: rgba(0,0,0, .1);

    &[type=number]::-webkit-inner-spin-button,
    [type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        border: 2px solid rgba(0,0,0, .1);
        border-radius: 4px;
    }
`;

export const Select = styled.select`
    display: block;
    font-size: 24px;
    text-align: center;
    width: 115px;
    background: rgba(0,0,0, .1);
    border: 2px solid rgba(0,0,0, .1);
    border-radius: 4px;

    option {
        border: 2px solid rgba(0,0,0, .1);
        border-radius: 4px;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const Label = styled.div`
    font-family: 'Orbitron', Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const NumberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

export const Arrow = styled.button`
    position: relative;
    width: 30px;
    height: 30px;
    background-color: transparent;
    outline: none;
    border: 2px solid rgba(0,0,0, .3);
    border-radius: 10px;
    margin: 0 15px;
    padding: 0;

    &::before,
    &::after{
        content: "";
        position: absolute;
        background-color: black;
    }

    /* Vertical line */
    &::before{
        ${props => props.plus && css`
            top: 4px;
            left: 50%;
            width: 4px;
            height: 70%;
            margin-left: -2px;
        `};
    }
    /* horizontal line */
    &::after{
        top: 50%;
        left: 4px;
        width: 70%;
        height: 4px;
        margin-top: -2px;
    };
    
    &:hover{
        cursor: pointer;
        border: 2px solid black;
    }
`;

export const IconContainer = styled.div`
    position: absolute;
    display:flex;
    justify-content: left;
    ${props => props.top ? (
        css`
            top: 0;
            padding: 15px 0 0 15px;
            left: 0;
            margin-bottom: 15px;
    `) : (
        css`
            bottom: 0;
            padding: 0 15px 15px 0;
            right: 0;
    `)
    }
    svg {
        width: 50px;
        height: 50px;
        transition: fill .3s ease-in-out;

        &:hover {
            cursor: pointer;
            ${props => props.top ? css`fill: rgba(0, 43, 255, .8);` : css`fill: rgba(68, 191, 46, .8);`
        }
    }
`;

export const InfoModal = styled.div`
    position:fixed;
    top: 0;
    background-color: rgba(255,255,255, 0.8);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

export const InfoWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    text-align: center;
    margin: 0 auto;
    padding: 30px 0;
    background-color: white;
    border-radius: 15px;
    
    @media (max-width: 480px) {
        width: 80%;
    }

    @media (max-width: 900px) and (orientation: landscape) {
        width: initial;
        max-height: 70vh;
    }

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

    h1 {
        font-weight: bold;
        background: -webkit-linear-gradient(45deg, #002bff, #7a00ff, #ff00c8, #ff0000);
        -webkit-background-clip: text;
        -webkit-text-stroke: 4px transparent;
        color: white;
    }

    span {
        display: inline-block;
        margin: 10px 30px;
        text-align: left;

        @media (max-width: 480px) {
            margin: 10px 30px;
        }
    }
    
    
`;

export const ConfirmButton = styled.button`
    width: 150px;
    margin: 15px auto;
    font-size: 18px;
    font-weight: bold;
    color: rgba(0,0,0,.6);
    border: 2px solid rgba(0,0,0,.6);
    background-color: transparent;
    padding: 5px 10px;
    transition: border .3s ease-in-out, color .3s ease-in-out;

    @media (max-width: 480px) {
        border: 2px solid rgba(68, 191, 46, .8);
        color: rgba(68, 191, 46, .8);
    }
    @media (max-width: 900px) and (orientation: landscape) {
        border: 2px solid rgba(68, 191, 46, .8);
        color: rgba(68, 191, 46, .8);
    }


    &:hover {
        border: 2px solid rgba(68, 191, 46, .8);
        color: rgba(68, 191, 46, .8);
        cursor: pointer;
    }
    
`;