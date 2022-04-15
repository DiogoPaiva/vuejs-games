import { calculatePercentage } from "@/helpers/rules";
import { ICurrentGame, IGame } from "@/interfaces/global.interface";

interface State {
  allGames: IGame[];
  currentGame: ICurrentGame;
}

export default {
  namespaced: true,

  state: {
    allGames: [] as IGame[],
    currentGame: {} as ICurrentGame,
  },
  getters: {
    playedMatches(state: State) {
      return state.allGames.length;
    },
    gameHistory(state: State) {
      return state.allGames.map((game) => {
        return game.winPlayer === "Player1" ? "P1" : "P2";
      });
    },
    gameVictories(state: State) {
      const history = state.allGames.map((game) => {
        return game.winPlayer === "Player1" ? "P1" : "P2";
      });
      const countP1 = history.filter((v) => v === "P1").length | 0;
      const countP2 = history.filter((v) => v === "P2").length | 0;
      const allGamesLength = state.allGames.length | 0;
      return {
        player1: {
          w: calculatePercentage(allGamesLength, countP1),
          l: 100 - calculatePercentage(allGamesLength, countP1),
        },
        player2: {
          w: calculatePercentage(allGamesLength, countP2),
          l: 100 - calculatePercentage(allGamesLength, countP2),
        },
      };
    },
  },
  mutations: {
    addLastPlayedGame(state: State, game: IGame) {
      state.allGames.push(game);
    },
    updateCurrentGame(state: State, game: ICurrentGame) {
      state.currentGame = {
        ...state.currentGame,
        ...game,
      };
    },
  },
};
