import React, { useState } from 'react';
import { AppWrapper, Header } from './App.styled';
import StartScreen from './components/start-screen/start-screen.component';
import GameBoard from './components/game-board/game-board.component';

function App() {

  const [gameProperties, setGameProperties] = useState({
    rows: 3,
    columns: 3,
    difficulty: 3
  });

  const [screenToRender, setScreenToRender] = useState(0);

  const changeBoardProperties = event => {
    event.preventDefault();
    const { name } = event.target;
    const value = parseInt(event.target.value);

    if (isNaN(value)) {
      setGameProperties({
        ...gameProperties,
        [name]: ''
      })
    }
    else {
      setGameProperties({
        ...gameProperties,
        [name]: value
      })
    }
  }

  const changeGameDifficulty = event => {
    const { value } = event.target;
    const parsedVal = parseInt(value);
    setGameProperties({
      ...gameProperties,
      difficulty: parsedVal
    })
  }

  const changeGamePropertiesSimpleGame = (difficulty) => {
    if(difficulty === 'easy') {setGameProperties({ rows: 5, columns: 5, difficulty: 3}); setScreenToRender(1)}
    if(difficulty === 'medium') {setGameProperties({ rows: 6, columns: 6, difficulty: 5}); setScreenToRender(1)}
    if(difficulty === 'hard') {setGameProperties({ rows: 8, columns: 8, difficulty: 8}); setScreenToRender(1)}
  }

  const checkValOnBlur = (event) => {
    const { name, value } = event.target
    if (value === '' || value < 3) {
      setTimeout(() => setGameProperties({
        ...gameProperties,
        [name]: 3
      }), 50)
    }
  }

  const incrOrDecrInputVal = (event, incrOrDecr, name) => {
    event.preventDefault();
    const isNanTest = isNaN(parseInt(gameProperties[name]))
    if (incrOrDecr === 'increment') {
      if (isNanTest) setGameProperties({ ...gameProperties, [name]: 3 })
      else
        setGameProperties({
          ...gameProperties,
          [name]: gameProperties[name] + 1
        })
    }
    else if (incrOrDecr === 'decrement') {
      if (isNanTest) setGameProperties({ ...gameProperties, [name]: 3 })
      else if (gameProperties[name] > 3)
        setGameProperties({
          ...gameProperties,
          [name]: parseInt(gameProperties[name]) - 1
        })
    }
  }

  const switchScreen = (command) => {
    if (command === 'restartGame') setScreenToRender(0);
    else if (command === 'startGame') setScreenToRender(1);
  }

  const Screens = [
    <StartScreen
      changeBoardProperties={changeBoardProperties}
      changeGameDifficulty={changeGameDifficulty}
      changeGamePropertiesSimpleGame={changeGamePropertiesSimpleGame}
      gameProperties={gameProperties}
      switchScreen={switchScreen}
      incrOrDecrInputVal={incrOrDecrInputVal}
      checkValOnBlur={checkValOnBlur}
    />,
    <GameBoard gameProperties={gameProperties} switchScreen={switchScreen} />,
  ];

  return (
    <AppWrapper>
      <Header>Color game</Header>
      {Screens[screenToRender]}
    </AppWrapper>
  );
}
export default App;
