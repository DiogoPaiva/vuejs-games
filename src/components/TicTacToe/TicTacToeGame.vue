<template>
  <div class="board tictactoe">
    <tic-tac-toe-item
      v-for="(item, index) in gameboard"
      :key="index"
      :value="index"
      @click="play(index)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TicTacToeItem from "./TicTacToeItem.vue";

export default defineComponent({
  name: "TicTacToeGame",
  components: {
    TicTacToeItem,
  },
  props: {},
  data() {
    return {
      player: Math.round(Math.random() * (2 - 1)) + 1,
      gameboard: Array(9).fill(null),
    };
  },
  methods: {
    play() {},
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
