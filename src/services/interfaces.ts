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

export interface StoreState {
  players: Player[];
  characterSkills: Skill[];
  gameResults: GameResult[];
  soundSettings: SoundSettings;
  keyBindings: KeyBindings;
  setPlayerPosition: (playerId: number, newPosition: Position) => void;
  updateCurrentFragments: (playerId: number, amount: number) => void;
  updateSavedFragments: (playerId: number, amount: number) => void;
  updateSkillCooldown: (skillId: number, cooldown: number) => void;
  updateSoundSettings: (newSettings: Partial<SoundSettings>) => void;
  updateKeyBindings: (newBindings: Record<string, string>) => void;
  updateGameResults: (result: GameResult) => void;
}
