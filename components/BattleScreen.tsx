import React, { useState, useEffect } from 'react';
import { Home, Skull, Zap } from 'lucide-react';
import { getPokemonImage, BATTLE_MESSAGES } from '../constants';
import { Scenario, GameOption } from '../types';

interface BattleScreenProps {
  scenario: Scenario;
  currentRound: number;
  totalRounds: number;
  onOptionSelect: (score: number) => void;
  onNext: () => void;
  onHome: () => void;
}

export const BattleScreen: React.FC<BattleScreenProps> = ({ 
  scenario, 
  currentRound, 
  totalRounds, 
  onOptionSelect, 
  onNext, 
  onHome,
}) => {
  const [selectedOption, setSelectedOption] = useState<GameOption | null>(null);
  const [displayOptions, setDisplayOptions] = useState<GameOption[]>([]);
  const [gameState, setGameState] = useState<'battle' | 'feedback'>('battle');
  const [dynamicFeedback, setDynamicFeedback] = useState<string>('');

  // Randomize options on mount or when scenario changes
  useEffect(() => {
    const opts = [...scenario.options];
    // Simple random sort
    if (Math.random() > 0.5) {
        opts.reverse();
    }
    setDisplayOptions(opts);
    setSelectedOption(null);
    setGameState('battle');
    setDynamicFeedback('');
  }, [scenario]);

  const handleOptionClick = (option: GameOption) => {
    if (gameState === 'feedback') return;
    
    // Select random feedback message
    const messages = BATTLE_MESSAGES[option.type];
    const randomIndex = Math.floor(Math.random() * messages.length);
    let message = messages[randomIndex];

    // Clean up move name (remove explanation in parentheses if exists)
    const moveNameClean = option.moveName.split(' (')[0];
    message = message.replace('{move}', moveNameClean);

    setDynamicFeedback(message);
    setSelectedOption(option);
    setGameState('feedback');
    onOptionSelect(option.score);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center p-2 font-sans transition-colors duration-500 ${scenario.bg}`}>
      
      {/* Header & Situation */}
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md rounded-b-xl p-4 text-white mb-4 border-b-2 border-white/20 relative">
         <button 
            onClick={onHome}
            className="absolute top-4 left-4 text-white/70 hover:text-white transition-colors"
         >
            <Home size={24} />
         </button>
         
         <div className="flex justify-end items-center mb-2 h-6">
            <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                BATTLE {currentRound + 1} / {totalRounds}
            </span>
         </div>
         <h2 className="text-xl font-bold mb-1 text-yellow-300 drop-shadow-md text-center mt-2">{scenario.title}</h2>
         <p className="text-sm md:text-base opacity-90 leading-snug text-center pb-2">{scenario.situation}</p>
      </div>

      {/* Battle Field */}
      <div className="flex-1 w-full max-w-2xl relative flex flex-col justify-center mb-4">
         
         {/* Enemy Pokemon (Always index 0 in raw data, which is 'bad') */}
         <div className="flex justify-start mb-8 pl-4">
            <div className="relative group">
               <div className="absolute -top-10 left-0 bg-white/90 px-3 py-1 rounded-lg shadow-lg border-l-4 border-slate-500 transform -rotate-2 z-10">
                  <div className="text-xs font-bold text-gray-500">야생의 {scenario.options[0].character}</div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                     <div className="h-full bg-slate-500 w-full"></div>
                  </div>
               </div>
               <img 
                  src={getPokemonImage(scenario.options[0].spriteId)} 
                  alt="Enemy" 
                  className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl animate-float filter grayscale-[30%] hover:grayscale-0 transition-all"
               />
            </div>
         </div>

         {/* Player Pokemon (Always index 1 in raw data, which is 'good') */}
         <div className="flex justify-end pr-4">
             <div className="relative group">
               <div className="absolute -top-10 right-0 bg-white/90 px-3 py-1 rounded-lg shadow-lg border-r-4 border-slate-500 transform rotate-2 z-10">
                  <div className="text-xs font-bold text-gray-500 text-right">나의 {scenario.options[1].character}</div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full mt-1 overflow-hidden ml-auto">
                     <div className="h-full bg-slate-500 w-full"></div>
                  </div>
               </div>
               <img 
                  src={getPokemonImage(scenario.options[1].spriteId)} 
                  alt="Player" 
                  className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl animate-bounce-slow"
               />
             </div>
         </div>

         {/* VS Text */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <span className="text-6xl font-black text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] italic">VS</span>
         </div>
      </div>

      {/* Control Panel */}
      <div className="w-full max-w-2xl bg-white rounded-t-2xl shadow-[0_-5px_20px_rgba(0,0,0,0.3)] p-4 border-t-8 border-slate-300">
         <div className="text-slate-500 font-bold text-sm mb-3 text-center uppercase tracking-widest">--- 무엇을 할까? ---</div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {displayOptions.map((opt, idx) => {
               // Styling logic
               let buttonStyle = "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"; 
               let iconColor = "text-slate-400";

               if (gameState === 'feedback') {
                  if (selectedOption === opt) {
                     if (opt.type === 'good') {
                        buttonStyle = "bg-blue-100 border-blue-500 text-blue-900 ring-2 ring-blue-500";
                        iconColor = "text-blue-500";
                     } else {
                        buttonStyle = "bg-red-100 border-red-500 text-red-900 ring-2 ring-red-500";
                        iconColor = "text-red-500";
                     }
                  } else {
                     buttonStyle = "bg-gray-100 border-gray-200 text-gray-400 opacity-50";
                  }
               }

               return (
                  <button
                     key={idx}
                     onClick={() => handleOptionClick(opt)}
                     disabled={gameState === 'feedback'}
                     className={`
                        relative overflow-hidden rounded-xl p-4 text-left border-2 transition-all group shadow-sm
                        ${buttonStyle}
                     `}
                  >
                     <div className="flex items-center justify-between mb-1">
                        <span className="font-black text-lg">{opt.moveName}</span>
                        {opt.type === 'bad' 
                           ? <Skull size={20} className={iconColor}/> 
                           : <Zap size={20} className={iconColor}/>
                        }
                     </div>
                     <div className="text-sm font-medium opacity-90">"{opt.text}"</div>
                  </button>
               );
            })}
         </div>
      </div>

      {/* Feedback Overlay */}
      {gameState === 'feedback' && selectedOption && (
         <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm pb-4 sm:pb-10 px-2">
            <div className={`rounded-xl shadow-2xl p-6 w-full max-w-2xl border-4 animate-fade-in-up ${selectedOption.type === 'good' ? 'bg-slate-800 border-blue-400' : 'bg-slate-800 border-red-400'}`}>
               <div className="flex items-center mb-3 border-b border-white/20 pb-2">
                  <span className={`text-sm font-bold px-2 py-1 rounded mr-2 text-white ${selectedOption.type === 'good' ? 'bg-blue-600' : 'bg-red-600'}`}>
                     {selectedOption.type === 'good' ? '나이스 샷!' : '실수했다!'}
                  </span>
                  <span className="font-bold text-yellow-400">{selectedOption.feedbackCharacter}의 해설</span>
               </div>
               
               {/* Dynamic Battle Log Message */}
               <div className="bg-black/20 rounded-lg p-3 mb-4 text-yellow-300 font-bold text-lg border border-yellow-300/30 animate-pulse leading-snug">
                  {dynamicFeedback}
               </div>
               
               {/* Story Feedback */}
               <div className="text-lg text-white font-medium leading-relaxed mb-6">
                  {selectedOption.feedback}
               </div>

               <div className="flex justify-end">
                  <button 
                     onClick={onNext}
                     className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-800 text-white font-bold py-2 px-6 rounded-lg flex items-center transition-all animate-pulse"
                  >
                     <span className="mr-2">▼</span>
                     {currentRound < totalRounds - 1 ? '다음 배틀로' : '결과 보기'}
                  </button>
               </div>
            </div>
         </div>
      )}
    </div>
  );
};