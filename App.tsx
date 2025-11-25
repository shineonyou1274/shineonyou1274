import React, { useState } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { BattleScreen } from './components/BattleScreen';
import { ResultScreen } from './components/ResultScreen';
import { GAME_DATA } from './constants';
import { GameState, Scenario } from './types';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [activeScenario, setActiveScenario] = useState<Scenario>(GAME_DATA[0]);
  const [isAiMode, setIsAiMode] = useState(false);
  
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
    setIsAiMode(false);
    setCurrentRound(0);
    setScore(0);
    setActiveScenario(GAME_DATA[0]);
    setGameState('battle');
  };

  const startAiGame = (scenario: Scenario) => {
    setIsAiMode(true);
    setCurrentRound(0);
    setScore(0);
    setActiveScenario(scenario);
    setGameState('battle');
  };

  const goHome = () => {
    setGameState('intro');
    setCurrentRound(0);
    setScore(0);
    setIsAiMode(false);
  };

  const handleOptionSelect = (roundScore: number) => {
    setScore(prev => prev + roundScore);
  };

  const nextRound = () => {
    if (isAiMode) {
      // AI mode is a single round for now
      goHome();
      return;
    }

    if (currentRound < GAME_DATA.length - 1) {
      const nextR = currentRound + 1;
      setCurrentRound(nextR);
      setActiveScenario(GAME_DATA[nextR]);
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
    return <IntroScreen onStart={startGame} onAiStart={startAiGame} highScore={highScore} />;
  }

  if (gameState === 'result') {
    return <ResultScreen score={score} onRestart={startGame} onHome={goHome} />;
  }

  return (
    <BattleScreen 
      scenario={activeScenario}
      currentRound={currentRound}
      totalRounds={isAiMode ? 1 : GAME_DATA.length}
      onOptionSelect={handleOptionSelect}
      onNext={nextRound}
      onHome={goHome}
      isAiMode={isAiMode}
    />
  );
}