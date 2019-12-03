import React from 'react';

import { GameFinishModal, Wrapper, GameOver, Summary, PlayAgain, Value } from './game-finish.styled';
import Userscore from '../userScore/userScore.component';


const GameFinish = ({ score }) => (
    <GameFinishModal>
        <Wrapper>
            <GameOver>Game over</GameOver>
            <Summary>
                <div>You've scored:</div>
                <div><Value>{score.userScore}</Value> points</div>
                <div>in</div>
                <div><Value>{score.clicks}</Value> moves</div>
            </Summary>
            <PlayAgain>Play again?</PlayAgain>
        </Wrapper>
    </GameFinishModal>
)

export default GameFinish;