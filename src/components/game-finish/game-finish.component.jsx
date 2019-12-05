import React from 'react';

import { GameFinish, GameOver, Summary, Value } from './game-finish.styled';
import StyledContainer from '../styled-container/styled-container.component';
import PlayAgain from '../custom-button/custom-button.component';


const GameFinishModal = ({ score: { userScore, clicks }, switchScreen }) => (
    <GameFinish>
        <StyledContainer>
            <GameOver>Game over</GameOver>
            <Summary>
                <div>You've scored:</div>
                <div><Value>{userScore}</Value> points</div>
                <div>in</div>
                <div><Value>{clicks}</Value> moves</div>
            </Summary>
            <PlayAgain func={() => switchScreen('restartGame')}>Play again?</PlayAgain>
        </StyledContainer>
    </GameFinish>
)

export default GameFinishModal;