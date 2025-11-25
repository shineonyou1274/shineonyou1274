import React, { useState } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { BattleScreen } from './components/BattleScreen';
import { ResultScreen } from './components/ResultScreen';
import { GAME_DATA } from './constants';
import { GameState } from './types';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  
  // Initialize high score from local storage
  const [highScore, setHighScore] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('pokeLingoHighScore');
      return saved ? parseInt(saved, 10) : 0;
    } catch (e) {
      // Storage access might be denied
      return 0;
    }
  });

  // --- Handlers ---
  
  const startGame = () => {
    setCurrentRound(0);
    setScore(0);
    setGameState('battle');
  };

  const goHome = () => {
    setGameState('intro');
    setCurrentRound(0);
    setScore(0);
  };

  const handleOptionSelect = (roundScore: number) => {
    setScore(prev => prev + roundScore);
  };

  const nextRound = () => {
    if (currentRound < GAME_DATA.length - 1) {
      setCurrentRound(prev => prev + 1);
      setGameState('battle');
    } else {
      // Game Over: Check and update high score
      if (score > highScore) {
        setHighScore(score);
        try {
          localStorage.setItem('pokeLingoHighScore', score.toString());
        } catch (e) {
          console.warn('Could not save high score to local storage:', e);
        }
      }
      setGameState('result');
    }
  };

  // --- Render Logic ---

  if (gameState === 'intro') {
    return <IntroScreen onStart={startGame} highScore={highScore} />;
  }

  if (gameState === 'result') {
    return <ResultScreen score={score} onRestart={startGame} onHome={goHome} />;
  }

  return (
    <BattleScreen 
      scenario={GAME_DATA[currentRound]}
      currentRound={currentRound}
      totalRounds={GAME_DATA.length}
      onOptionSelect={handleOptionSelect}
      onNext={nextRound}
      onHome={goHome}
    />
  );
}