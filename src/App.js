import React, { useState } from 'react';
import { AppWrapper, Header } from './App.styled';
import StartScreen from './components/start-screen/start-screen.component';
import GameBoard from './components/game-board/game-board.component';

function App() {

  // starting values for development (to change!)
  const [gameProperties, setGameProperties] = useState({
    rows: 8,
    columns: 8
  });

  //
  const [screenToRender, setScreenToRender] = useState(0);

  const changeGameProperties = event => {
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

  const checkValoNBlur = (event) => {
    const {name, value} = event.target
    if(value === '' || value < 3) {
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

  const switchScreen = () => {
    setScreenToRender(screenToRender + 1)
  }

  const Screens = [
    <StartScreen
      changeGameProperties={changeGameProperties}
      gameProperties={gameProperties}
      startGame={switchScreen}
      incrOrDecrInputVal={incrOrDecrInputVal}
      checkValoNBlur={checkValoNBlur}
    />,
    <GameBoard gameProperties={gameProperties} />,
    // <Summary />
  ];

  return (
    <AppWrapper>
      <Header>Color game</Header>
      {Screens[screenToRender]}
    </AppWrapper>
  );
}
export default App;
