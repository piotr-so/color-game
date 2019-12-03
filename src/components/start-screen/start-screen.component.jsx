import React from 'react';
import { Input, Label, Arrow, NumberContainer, StartGameWrap } from './start-screen.styled';
import { Wrapper, PlayAgain as StartGame } from '../game-finish/game-finish.styled';

const StartScreen = ({ gameProperties, changeGameProperties, startGame, incrOrDecrInputVal, checkValoNBlur }) => {
    const { rows, columns } = gameProperties;
    return (
        <Wrapper>
            <StartGameWrap>
                <Label>Number of rows (min. 3)</Label>
                <NumberContainer>
                    <Arrow onClick={(e) => incrOrDecrInputVal(e,'decrement', 'rows')}/>
                    <Input
                        type='number'
                        id='rows'
                        name='rows'
                        min='3'
                        value={rows}
                        onChange={changeGameProperties}
                        onBlur={checkValoNBlur}
                    >
                    </Input>
                    <Arrow plus onClick={(e) => incrOrDecrInputVal(e,'increment', 'rows')}/>
                </NumberContainer>
                <Label>Number of columns (min. 3)</Label>
                <NumberContainer>
                    <Arrow onClick={(e) => incrOrDecrInputVal(e,'decrement', 'columns')}/>
                    <Input
                        type='number'
                        id='columns'
                        name='columns'
                        min='3'
                        value={columns}
                        onChange={changeGameProperties}
                        onBlur={checkValoNBlur}
                    >
                    </Input>
                    <Arrow plus onClick={e => incrOrDecrInputVal(e,'increment', 'columns')}/>
                </NumberContainer>
            </StartGameWrap>

            <StartGame onClick={startGame}>Start game</StartGame>
        </Wrapper>
    )
}

export default StartScreen;