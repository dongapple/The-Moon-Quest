import { create } from 'zustand';
import type { Position, SoundSettings, GameResult, StoreState } from './interfaces';

const useStore = create<StoreState>((set) => ({
  players: [
    {
      player_id: 1,
      character_id: 2,
      current_fragments: 5,
      saved_fragments: 3,
      position: { x: 100, y: 200 },
      member_id: 1,
    },
    {
      player_id: 2,
      character_id: 1,
      current_fragments: 3,
      saved_fragments: 2,
      position: { x: 150, y: 250 },
      member_id: 2,
    },
  ],
  characterSkills: [
    { skill_id: 1, name: 'Fireball', cooldown: 5, effect: 'Burns enemy' },
    { skill_id: 2, name: 'Heal', cooldown: 10, effect: 'Restores health' },
  ],
  gameResults: [],
  soundSettings: {
    effectVolume: 100,
    effectOn: true,
    bgmVolume: 100,
    bgmOn: true,
  },
  keyBindings: {
    jump: 'Space',
    crouch: 'Ctrl',
    moveLeft: 'A',
    moveRight: 'D',
    attack: 'LeftClick',
    skill: 'Q',
    gather: 'E',
  },

  currentScreen: 'home',

  setCurrentScreen: (screen: StoreState['currentScreen']) => {
    set({ currentScreen: screen });
  },

  setPlayerPosition: function (playerId: number, newPosition: Position) {
    set((state) => {
      return {
        players: state.players.map((player) => {
          return player.player_id === playerId ? { ...player, position: newPosition } : player;
        }),
      };
    });
  },

  updateCurrentFragments: function (playerId: number, amount: number) {
    set((state) => {
      return {
        players: state.players.map((player) =>
          player.player_id === playerId ? { ...player, current_fragments: amount } : player
        ),
      };
    });
  },

  updateSavedFragments: function (playerId: number, amount: number) {
    set((state) => {
      return {
        players: state.players.map((player) =>
          player.player_id === playerId ? { ...player, saved_fragments: amount } : player
        ),
      };
    });
  },

  updateSkillCooldown: function (skillId: number, cooldown: number) {
    set((state) => {
      return {
        characterSkills: state.characterSkills.map((skill) =>
          skill.skill_id === skillId ? { ...skill, cooldown } : skill
        ),
      };
    });
  },

  updateSoundSettings: function (newSettings: Partial<SoundSettings>) {
    set((state) => {
      return {
        soundSettings: { ...state.soundSettings, ...newSettings },
      };
    });
  },

  updateKeyBindings: function (newBindings: Record<string, string>) {
    set((state) => {
      return {
        keyBindings: { ...state.keyBindings, ...newBindings },
      };
    });
  },

  updateGameResults: function (result: GameResult) {
    set((state) => {
      return {
        gameResults: [...state.gameResults, result],
      };
    });
  },
}));

export default useStore;
