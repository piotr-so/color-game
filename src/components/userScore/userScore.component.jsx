import React from 'react';

import { UserScoreWrapper, Score, AddedScore } from './userScore.styled';

const UserScore = ({ score: { userScore, clicks, addedScore, addedScoreCssHelper } }) => (
    <UserScoreWrapper>
        <Score>Score: {userScore}
            <AddedScore key={
                `${addedScore}${addedScoreCssHelper === true ? 'Y' : 'N'}`
                }
                >{addedScore}</AddedScore>
        </Score>
    </UserScoreWrapper>
)

export default UserScore;