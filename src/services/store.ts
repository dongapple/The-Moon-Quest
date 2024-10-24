// store.ts

import { create } from 'zustand';
import type { Position, SoundSettings, GameResult, StoreState } from './interfaces';
let timerId: number | null = null;
const gameTimer = 5;
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
    jump: 'w',
    crouch: 's',
    moveLeft: 'a',
    moveRight: 'd',
    attack: 0,
    skill: 2,
    gather: ' ',
  },

  keyPressed: {},

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
  startGame: function () {
    // 현재 상태를 가져와서
    set((state) => {
      // 현재 화면이 'game'이 아닐 경우
      if (state.currentScreen !== 'game') {
        console.log('게임중단');
        return state; // 게임이 중단되면 현재 상태를 그대로 반환
      }

      // 이전 타이머가 설정되어 있으면 정리
      if (timerId !== null) {
        clearInterval(timerId);
      }

      const gameId = state.gameResults.length + 1;
      const initialGameResult = {
        game_id: gameId,
        player1_fragments: 0,
        player2_fragments: 0,
        player1_id: state.players[0].player_id,
        player2_id: state.players[1].player_id,
        winner_id: 0,
      };

      // 초기 게임 결과 추가
      return {
        gameResults: [...state.gameResults, initialGameResult],
      };
    });

    let remainingTime = gameTimer; // 남은 시간 변수

    // 타이머 업데이트 함수
    timerId = window.setInterval(() => {
      set((state) => {
        // 현재 화면이 'game'이 아닐 경우 타이머 종료
        if (state.currentScreen !== 'game') {
          console.log('게임중단');
          if (timerId !== null) {
            // timerId가 null이 아닐 때만 clearInterval 호출
            clearInterval(timerId);
            timerId = null; // timerId를 null로 설정
          }
          return state; // 상태를 그대로 반환하여 중단
        }

        if (remainingTime > 0) {
          remainingTime -= 1;
          const currentGame = state.gameResults[state.gameResults.length - 1];
          return {
            gameResults: [
              ...state.gameResults.slice(0, -1),
              { ...currentGame }, // end_time 제거
            ],
          };
        } else {
          if (timerId !== null) {
            clearInterval(timerId); // 타이머 종료
            timerId = null; // timerId를 null로 설정
          }

          // 승자 결정 로직
          const currentGame = state.gameResults[state.gameResults.length - 1];
          const winnerId =
            currentGame.player1_fragments > currentGame.player2_fragments
              ? currentGame.player1_id
              : currentGame.player1_fragments < currentGame.player2_fragments
                ? currentGame.player2_id
                : 0;

          console.log('타임끝');
          return {
            gameResults: [
              ...state.gameResults.slice(0, -1),
              { ...currentGame, winner_id: winnerId },
            ],
            currentScreen: 'final', // final 페이지로 이동
          };
        }
      });
    }, 1000);
  },
}));

export default useStore;
