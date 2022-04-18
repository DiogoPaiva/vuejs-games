import { calculatePercentage } from "@/helpers/rules";
import {
  EGameStatus,
  EGameType,
  ICurrentGame,
  IGame,
} from "@/interfaces/global.interface";

interface State {
  allGames: IGame[];
  currentGame: ICurrentGame;
  matches: IGame[];
}

export default {
  namespaced: true,

  state: {
    allGames: [] as IGame[],
    currentGame: {} as ICurrentGame,
    matches: [] as IGame[],
  },
  getters: {
    playedMatches(state: State) {
      // Intializa array with 5 positions, and fill them when a new match is played
      const playedMatchesArr = Array(5).fill("empty");
      for (let i = 0; i < state.matches.length; i++) {
        playedMatchesArr[i] = "played";
      }
      return playedMatchesArr;
    },
    gameHistory(state: State) {
      const gamesArray = Array(8).fill("");
      for (let i = 0; i < state.allGames.length; i++) {
        gamesArray[i] = state.allGames[i].winPlayer === "Player1" ? "P1" : "P2";
      }
      return gamesArray;
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
          w: calculatePercentage(allGamesLength, countP1) | 0,
          l: (100 - calculatePercentage(allGamesLength, countP1)) | 0,
        },
        player2: {
          w: calculatePercentage(allGamesLength, countP2) | 0,
          l: (100 - calculatePercentage(allGamesLength, countP2)) | 0,
        },
      };
    },
    totalTime(state: State) {
      return state.allGames.reduce((a, b) => a + b.duration, 0);
    },
  },
  mutations: {
    addLastPlayedMatch(state: State, game: IGame) {
      state.matches.push(game);
      if (state.matches && state.matches.length === 5) {
        // Check for the winner best out of five matches
        const P1Wins = state.matches.filter(
          (match) => match.winPlayer === "Player1"
        ).length;

        const P2Wins = state.matches.filter(
          (match) => match.winPlayer === "Player2"
        ).length;

        const winner = P1Wins > P2Wins ? "Player1" : "Player2";
        const sumTimeOfMatches = state.matches.reduce(
          (a, b) => a + b.duration,
          0
        );

        // Add  Winner to games array
        state.allGames.push({
          winPlayer: winner,
          gameType: EGameType.TICTACTOE,
          markUsed: "",
          duration: sumTimeOfMatches,
          gameStatus: EGameStatus.WIN,
        });

        // Clear all matches form the array to start a new game
        state.matches.length = 0;
      }
    },
    updateCurrentGame(state: State, game: ICurrentGame) {
      state.currentGame = {
        ...state.currentGame,
        ...game,
      };
    },
  },
};
