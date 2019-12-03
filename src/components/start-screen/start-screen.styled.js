import styled, { css } from 'styled-components/macro';

export const StartGameWrap = styled.div`
    &> * {
        margin-bottom: 20px;
    }
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

export const Label = styled.div`
    display: inline-block;
    font-family: 'Orbitron';
    font-size: 18px;
    font-weight: 700;
`;

export const NumberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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