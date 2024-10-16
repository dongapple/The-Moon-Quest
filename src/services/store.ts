import { create } from 'zustand';

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
  setPlayerPosition: (playerId: Player['player_id'], newPosition: Position) =>
    set((state: StoreState) => ({
      players: state.players.map((player: Player) =>
        player.player_id === playerId ? { ...player, position: newPosition } : player
      ),
    })),

  updateCurrentFragments: (playerId: Player['player_id'], amount: number) =>
    set((state: StoreState) => ({
      players: state.players.map((player: Player) =>
        player.player_id === playerId ? { ...player, current_fragments: amount } : player
      ),
    })),

  updateSavedFragments: (playerId: Player['player_id'], amount: number) =>
    set((state: StoreState) => ({
      players: state.players.map((player: Player) =>
        player.player_id === playerId ? { ...player, saved_fragments: amount } : player
      ),
    })),

  updateSkillCooldown: (skillId: Skill['skill_id'], cooldown: number) =>
    set((state: StoreState) => ({
      characterSkills: state.characterSkills.map((skill: Skill) =>
        skill.skill_id === skillId ? { ...skill, cooldown } : skill
      ),
    })),

  updateSoundSettings: (newSettings: Partial<SoundSettings>) =>
    set((state: StoreState) => ({
      soundSettings: { ...state.soundSettings, ...newSettings },
    })),

  updateKeyBindings: (newBindings: Record<string, string>) =>
    set((state: StoreState) => ({
      keyBindings: { ...state.keyBindings, ...newBindings },
    })),

  updateGameResults: (result: GameResult) =>
    set((state: StoreState) => ({
      gameResults: [...state.gameResults, result],
    })),
}));
