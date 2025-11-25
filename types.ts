export type OptionType = 'bad' | 'good';

export interface GameOption {
  type: OptionType;
  character: string;
  spriteId: number;
  label: string;
  text: string;
  moveName: string;
  feedbackCharacter: string;
  feedback: string;
  score: number;
}

export interface Scenario {
  id: number;
  title: string;
  situation: string;
  bg: string;
  options: GameOption[]; // Index 0 is always bad, Index 1 is always good in raw data
}

export interface ResultLevel {
  min: number;
  max: number;
  level: string;
  title: string;
  pokemonId: number;
  desc: string;
  color: string;
}

export type GameState = 'intro' | 'battle' | 'feedback' | 'result' | 'loading_ai';
