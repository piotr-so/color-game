import styled from 'styled-components/macro';

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    padding: 20px 60px;

    > * {
        margin-bottom: 20px;
    }
`;

export const Header = styled.header`
    font-size: 50px;
`;