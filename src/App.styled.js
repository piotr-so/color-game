import styled from 'styled-components/macro';

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.header`
    font-size: 50px;
    font-family: 'Orbitron', Arial, sans-serif;
    font-weight: 700;
    margin: 20px 0;
    @media (max-width: 480px) {
        font-size: 30px; 
    }
`;