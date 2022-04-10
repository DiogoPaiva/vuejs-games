import { createApp } from "vue";
import { createStore } from "vuex";
import "./assets/styles/index.scss";
import App from "./App.vue";
import { EGameType } from "./interfaces/global.interface.ts";

const store = createStore({
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

const app = createApp(App).mount("#app");
// createApp(App).mount("#app");
app.use(store);
