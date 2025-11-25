import React, { useState } from 'react';
import { Play, Info, X, Trophy } from 'lucide-react';
import { getPokemonImage, RESULTS } from '../constants';

interface IntroScreenProps {
  onStart: () => void;
  highScore: number;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart, highScore }) => {
  const [showLevelGuide, setShowLevelGuide] = useState(false);

  return (
    <div className="min-h-screen bg-red-600 flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
      
      {/* High Score Badge */}
      {highScore > 0 && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-black shadow-lg border-2 border-yellow-200 flex items-center gap-2 z-20 animate-fade-in-up">
           <Trophy size={20} className="fill-yellow-900" />
           <span>최고 점수: {highScore}</span>
        </div>
      )}

      {/* Decorative Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-96 h-96 rounded-full border-[20px] border-black bg-white relative">
          <div className="absolute top-1/2 left-0 w-full h-4 bg-black -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full border-[10px] border-black -translate-x-1/2 -translate-y-1/2 z-10"></div>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600 rounded-t-full"></div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center border-8 border-yellow-400 relative z-10">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-2 drop-shadow-md">
          포켓몬 언어 배틀
        </h1>
        <p className="text-gray-500 font-bold mb-8">당신의 언어 습관을 테스트한다!</p>
        
        <div className="flex justify-center items-end space-x-4 mb-8 h-32">
           <img src={getPokemonImage(25)} alt="Pikachu" className="h-28 animate-bounce" />
           <div className="text-4xl font-black text-slate-300">VS</div>
           <img src={getPokemonImage(94)} alt="Gengar" className="h-28 animate-pulse" />
        </div>

        <div className="space-y-3">
          <button 
            onClick={onStart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 rounded-lg text-xl shadow-[0_4px_0_rgb(30,58,138)] active:shadow-[0_0px_0_rgb(30,58,138)] active:translate-y-1 transition-all flex items-center justify-center"
          >
            <Play className="mr-2 fill-current" /> 모험 시작하기
          </button>
          
          <button 
            onClick={() => setShowLevelGuide(true)}
            className="w-full bg-white border-2 border-slate-300 hover:bg-slate-50 text-slate-600 font-bold py-3 px-8 rounded-lg text-lg flex items-center justify-center"
          >
            <Info className="mr-2" size={20} /> 랭크 가이드
          </button>
        </div>
      </div>
      <div className="mt-4 text-white font-bold text-sm opacity-80">© PokeBattle Language Edu</div>

      {/* Rank Guide Modal */}
      {showLevelGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-fade-in-up shadow-2xl">
            <button 
              onClick={() => setShowLevelGuide(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">트레이너 랭크 가이드</h2>
            <div className="space-y-4">
              {RESULTS.map((r, idx) => (
                <div key={idx} className="flex items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <img src={getPokemonImage(r.pokemonId)} alt={r.title} className="w-16 h-16 object-contain mr-4" />
                  <div>
                    <div className={`text-xs font-bold px-2 py-0.5 rounded text-white inline-block mb-1 ${r.color}`}>
                      {r.level}
                    </div>
                    <div className="font-bold text-slate-700 text-sm">{r.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};