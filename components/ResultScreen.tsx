import React from 'react';
import { RotateCcw, Home } from 'lucide-react';
import { getPokemonImage, RESULTS } from '../constants';
import { ResultLevel } from '../types';

interface ResultScreenProps {
  score: number;
  onRestart: () => void;
  onHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, onRestart, onHome }) => {
  const result: ResultLevel = RESULTS.find(r => score >= r.min && score <= r.max) || RESULTS[0];

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-4 relative font-sans">
        <button 
            onClick={onHome}
            className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-md transition-colors z-20"
        >
            <Home size={24} />
        </button>

        <div className="w-full max-w-lg bg-slate-100 rounded-lg shadow-2xl overflow-hidden border-4 border-slate-300">
           {/* Hall of Fame Header */}
           <div className="bg-yellow-400 p-4 border-b-4 border-yellow-600 text-center">
              <h2 className="text-2xl font-black text-yellow-900 uppercase tracking-widest">명예의 전당</h2>
           </div>
           
           <div className="p-8 text-center bg-white">
              <div className="mb-2 text-gray-500 font-bold">최종 점수</div>
              <div className="text-6xl font-black text-slate-800 mb-6">{score}점</div>
              
              <div className="relative inline-block mb-6">
                 <div className={`absolute inset-0 ${result.color} blur-2xl opacity-30 rounded-full`}></div>
                 <img src={getPokemonImage(result.pokemonId)} alt="Result Pokemon" className="w-48 h-48 relative z-10 object-contain drop-shadow-xl animate-bounce-slow" />
              </div>
              
              <h3 className={`text-xl font-bold text-white px-4 py-2 rounded-full inline-block mb-4 ${result.color}`}>
                 {result.level}
              </h3>
              <div className="text-2xl font-bold text-slate-800 mb-2">{result.title}</div>
              <p className="text-gray-600 leading-relaxed break-keep bg-slate-100 p-4 rounded-lg">
                 {result.desc}
              </p>
           </div>

           <div className="p-4 bg-slate-200">
             <button 
               onClick={onRestart}
               className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center"
             >
               <RotateCcw className="mr-2" /> 다시 도전하기
             </button>
           </div>
        </div>
      </div>
  );
};
