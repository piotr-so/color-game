import React from 'react';

import { UserScoreWrapper, Score, AddedScore } from './userScore.styled';

const UserScore = ({ score: { userScore, addedScore, addedScoreCssHelper } }) => (
    <UserScoreWrapper>
        <Score>Score: <span>{userScore}</span>
            <AddedScore
                key={`${addedScore}${addedScoreCssHelper === true ? 'Y' : 'N'}`}
            >
                {addedScore}
            </AddedScore>
        </Score>
    </UserScoreWrapper>
)

export default UserScore;