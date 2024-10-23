// interfaces.ts

export interface Position {
  x: number;
  y: number;
}

export interface Player {
  player_id: number;
  character_id: number;
  current_fragments: number;
  saved_fragments: number;
  position: Position;
  member_id: number;
}

export interface Skill {
  skill_id: number;
  name: string;
  cooldown: number;
  effect: string;
}

export interface GameResult {
  game_id: number;
  player1_fragments: number;
  player2_fragments: number;
  player1_id: number;
  player2_id: number;
  winner_id: number;
}

export interface SoundSettings {
  effectVolume: number;
  effectOn: boolean;
  bgmVolume: number;
  bgmOn: boolean;
}

export interface KeyBindings {
  jump: string;
  crouch: string;
  moveLeft: string;
  moveRight: string;
  attack: string;
  skill: string;
  gather: string;
}

export type KeyPressed = Record<string, boolean>;

export interface StoreState {
  [x: string]: any;
  players: Player[];
  characterSkills: Skill[];
  gameResults: GameResult[];
  soundSettings: SoundSettings;
  keyBindings: KeyBindings;
  currentScreen:
    | 'home'
    | 'howToPlay'
    | 'preparation'
    | 'characterSelect'
    | 'mapSelect'
    | 'game'
    | 'final'
    | 'ranking'
    | 'creators';

  setPlayerPosition: (playerId: number, newPosition: Position) => void;
  updateCurrentFragments: (playerId: number, amount: number) => void;
  updateSavedFragments: (playerId: number, amount: number) => void;
  updateSkillCooldown: (skillId: number, cooldown: number) => void;
  updateSoundSettings: (newSettings: Partial<SoundSettings>) => void;
  updateKeyBindings: (newBindings: Record<string, string>) => void;
  updateGameResults: (result: GameResult) => void;
  setCurrentScreen: (screen: StoreState['currentScreen']) => void;
  startGame: () => void; // startGame 함수 추가
  setKeyPressed: (key: string, state: boolean) => void;
}
