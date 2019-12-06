import styled, {css} from 'styled-components/macro';

export const RainbowBorder = css`
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
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    min-height: 70vh;
    text-align: center;
    margin: 0 auto;
    background-color: white;
    border-radius: 15px;
    
    @media (max-width: 480px) {
        width: 80%;
        height: 75vh; 
    }
    ${RainbowBorder}
`;
