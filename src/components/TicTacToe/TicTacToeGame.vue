<template>
  <div class="board tictactoe">
    <tic-tac-toe-item
      v-for="(item, index) in gameboard"
      :key="index"
      :value="item"
      @play="play(index)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import TicTacToeItem from "./TicTacToeItem.vue";

export default defineComponent({
  name: "TicTacToeGame",
  components: {
    TicTacToeItem,
  },
  props: {},
  data() {
    return {
      player: {
        name: "",
        value: "X",
      },
      gameboard: Array(9).fill(null),
    };
  },
  methods: {
    play(index: any) {
      // Prevent altering the same square, return if it has value
      if (this.gameboard[index]) {
        return;
      }
      this.gameboard[index] = this.player.value;

      nextTick(() => {
        this.player.value = this.player.value === "X" ? "O" : "X";
        this.player.name =
          this.player.name === "Player1" ? "Player2" : "Player1";
      });
      // Send Player to the parent component
      this.$emit("player", this.player);
    },
  },
  computed: {},
  mounted() {
    // Set the Initial player to play (Player 1 or Player2)
    this.player.name = "Player" + (Math.round(Math.random() * (2 - 1)) + 1);
    this.$emit("player", this.player);
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
