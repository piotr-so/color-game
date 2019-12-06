import styled from 'styled-components/macro';

export const Button = styled.button`
    position: relative;
    z-index: 0;
    width: 220px;
    height: 50px;
    font-family: 'Orbitron', Arial, sans-serif;
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
    margin: 10px auto;
    transition: border-color .3s ease-in-out;

    &:hover {
        cursor: pointer;
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