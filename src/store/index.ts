import { EGameType } from "@/interfaces/global.interface";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      currentGame: {
        winPlayer: "Player 1",
        gameType: EGameType.FOURINAROW,
        duration: "333",
      },
      globalStats: {
        totalTime: "0000",
        playedMatches: [
          {
            winPlayer: "Player 1",
            gameType: EGameType.FOURINAROW,
            duration: "333",
          },
          {
            winPlayer: "Player 1",
            gameType: EGameType.TICTACTOE,
            duration: "444",
          },
          {
            winPlayer: "Player 2",
            gameType: EGameType.TICTACTOE,
            duration: "555",
          },
        ],
      },
    };
  },
});
