import React, { useState } from 'react';
import { AppWrapper, Header } from './App.styled';
import StartScreen from './components/start-screen/start-screen.component';
import GameBoard from './components/game-board/game-board.component';
import Summary from './components/summary/summary.component';

function App() {

  // starting values for development (to change!)
  const [gameProperties, setGameProperties] = useState({
    rows: '5',
    columns: '5'
  });

  //
  const [screenToRender, setScreenToRender] = useState(1);

  const changeGameProperties = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setGameProperties({
      ...gameProperties,
      [name]: value
    })
  }

  const switchScreen = () => {
    setScreenToRender(screenToRender + 1)
  }

  const Screens = [
    <StartScreen
      changeGameProperties={changeGameProperties}
      gameProperties={gameProperties}
      startGame={switchScreen} />,
    <GameBoard gameProperties={gameProperties}/>,
    <Summary />
  ];

  return (
    <AppWrapper>
      <Header>Color game</Header>
      {Screens[screenToRender]}
    </AppWrapper>
  );
}
export default App;
