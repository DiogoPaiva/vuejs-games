<template>
  <div>
    <div class="board tictactoe">
      <tic-tac-toe-item
        v-for="(item, index) in gameboard"
        :key="index"
        :value="item"
        @play="play(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import TicTacToeItem from "./TicTacToeItem.vue";
import { checkBoardWinner } from "../../helpers/rules";
import {
  EGameStatus,
  EGameType,
  IPlayer,
} from "../../interfaces/global.interface";
import { mapState } from "vuex";

export default defineComponent({
  name: "TicTacToeGame",
  components: {
    TicTacToeItem,
  },
  props: {},
  data() {
    return {
      duration: 0,
      startCounter: false,
      counter: 0,
      player: {
        name: "",
        value: "X",
        winner: false,
      },
      gameboard: Array(9).fill(null),
    };
  },
  watch: {
    startCounter() {
      if (this.startCounter === true) {
        this.counter = setInterval(() => {
          this.duration += 1;
          this.$emit("counter", this.duration);
        }, 1000);
      } else {
        this.resetCounter();
      }
    },
  },
  methods: {
    resetCounter() {
      this.duration = 0;
      this.startCounter = false;
      clearInterval(this.counter);
      this.$emit("counter", this.duration);
    },
    play(index: any) {
      // Prevent altering the same boardgame square, return if it has a value
      if (this.gameboard[index]) {
        return;
      }

      // Start Counting
      this.startCounter = true;
      // Set player move to the index cell on board
      this.gameboard[index] = this.player.value;

      nextTick(() => {
        this.player.value = this.player.value === "X" ? "O" : "X";
        this.player.name =
          this.player.name === "Player1" ? "Player2" : "Player1";
      });

      this.updateCurrentGameStore();

      const winner: IPlayer = checkBoardWinner(this.gameboard, this.player);
      // Send Winner to the parent component
      this.$emit("player", winner);
      if (winner.winner === true) {
        this.addGameToStore(winner);
        this.startCounter = false;
      }
    },
    resetGame() {
      // Clear the game for initiating a new one
      this.gameboard.fill(null);
      this.player.name = this.player.name === "Player1" ? "Player2" : "Player1";
      this.player.value = this.player.value === "X" ? "O" : "X";
      this.resetCurrentGameStore();
      this.resetCounter();
    },
    addGameToStore(winner: IPlayer) {
      const lastGame = {
        winPlayer: winner.name,
        gameType: EGameType.TICTACTOE,
        markUsed: winner.value,
        duration: this.duration,
        gameStatus: EGameStatus.WIN,
      };
      this.$store.commit("gameModule/addLastPlayedMatch", lastGame);
    },
    updateCurrentGameStore() {
      const thisGame = {
        currentPlayer: this.player.name,
        nextPlayer: this.player.name === "Player1" ? "Player2" : "Player1",
        duration: this.duration,
        gameStatus: EGameStatus.ONGOING,
      };
      this.$store.commit("gameModule/updateCurrentGame", thisGame);
    },
    resetCurrentGameStore() {
      const thisGame = {
        currentPlayer: "",
        nextPlayer: "",
        duration: 0,
        gameStatus: EGameStatus.START,
      };
      this.$store.commit("gameModule/updateCurrentGame", thisGame);
    },
  },
  computed: {
    ...mapState(["allGames"]),
    ...mapState(["currentGame"]),
  },
  mounted() {
    // Set the Initial player to play (Player 1 or Player2)
    this.player.name = "Player" + (Math.round(Math.random() * (2 - 1)) + 1);
    this.$emit("player", this.player);
    this.resetCurrentGameStore();
  },
});
</script>

<style lang="scss" scoped>
.board {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
