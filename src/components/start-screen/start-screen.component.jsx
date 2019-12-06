import React, { useState } from 'react';
import {
    Input,
    Label,
    Arrow,
    NumberContainer,
    StartGameWrap,
    Select,
    IconContainer,
    InfoModal,
    InfoWrapper,
    ConfirmButton
} from './start-screen.styled';
import StyledContainer from '../styled-container/styled-container.component';
import CustomButton from '../custom-button/custom-button.component';
import Info from '../../assets/svg-ico.component.jsx';
import ReturnIco from '../../assets/return-ico.component';


const StartScreen = ({
    gameProperties,
    changeBoardProperties,
    changeGameDifficulty,
    changeGamePropertiesSimpleGame,
    switchScreen,
    incrOrDecrInputVal,
    checkValOnBlur }) => {

    const [customiseStatus, setCustomiseStatus] = useState(false);
    const [isInfoVisible, setisInfoVisible] = useState(false);

    const { rows, columns, difficulty } = gameProperties;


    return (
        <>
            <StyledContainer>
                
                {customiseStatus ? (
                    <>
                    <IconContainer top onClick={() => setCustomiseStatus(false)}>
                        <ReturnIco/>
                    </IconContainer>
                    <StartGameWrap fixMargin>
                        <Label>Number of rows (min. 3)</Label>
                        <NumberContainer>
                            <Arrow onClick={(e) => incrOrDecrInputVal(e, 'decrement', 'rows')} />
                            <Input
                                type='number'
                                id='rows'
                                name='rows'
                                min='3'
                                value={rows}
                                onChange={changeBoardProperties}
                                onBlur={checkValOnBlur}
                            >
                            </Input>
                            <Arrow plus onClick={(e) => incrOrDecrInputVal(e, 'increment', 'rows')} />
                        </NumberContainer>
                        <Label>Number of columns (min. 3)</Label>
                        <NumberContainer>
                            <Arrow onClick={(e) => incrOrDecrInputVal(e, 'decrement', 'columns')} />
                            <Input
                                type='number'
                                id='columns'
                                name='columns'
                                min='3'
                                value={columns}
                                onChange={changeBoardProperties}
                                onBlur={checkValOnBlur}
                            >
                            </Input>
                            <Arrow plus onClick={e => incrOrDecrInputVal(e, 'increment', 'columns')} />
                        </NumberContainer>
                        <Label>Number of colors</Label>
                        <NumberContainer>
                            <Select value={difficulty} onChange={changeGameDifficulty}>
                                <option value="3">3 colors</option>
                                <option value="5">5 colors</option>
                                <option value="8">8 colors</option>
                            </Select>
                        </NumberContainer>

                        <CustomButton func={() => switchScreen('startGame')}>Start game</CustomButton>
                    </StartGameWrap>
                    </>

                ) : (
                        <>
                            <StartGameWrap>
                                <Label>Select level</Label>
                                <CustomButton func={() => changeGamePropertiesSimpleGame('easy')}>Easy</CustomButton>
                                <CustomButton func={() => changeGamePropertiesSimpleGame('medium')}>Medium</CustomButton>
                                <CustomButton func={() => changeGamePropertiesSimpleGame('hard')}>Hard</CustomButton>
                                <CustomButton func={() => setCustomiseStatus(!customiseStatus)} customise>Custom</CustomButton>

                            </StartGameWrap>
                            <IconContainer onClick={() => setisInfoVisible(true)}>
                                <Info />
                            </IconContainer>
                        </>
                    )}
            </StyledContainer>
            {isInfoVisible ?
                <InfoModal>
                    <InfoWrapper>
                        <h1>How to play?</h1>
                        <span>All you need to do is to click on the same color blocks to crush them.</span>
                        <span>There should be at least two identical next to each other.</span>
                        <span>Gain points for each one crushed and try not to lose all possible moves.</span>
                        <span>Remember: the more you match, the better your score.</span>
                        <ConfirmButton onClick={() => setisInfoVisible(false)}>I understand</ConfirmButton>
                    </InfoWrapper>
                </InfoModal>
                : undefined
            }
        </>
    )
}

export default StartScreen;