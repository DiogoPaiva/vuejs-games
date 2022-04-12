<template>
  <div class="games-arena">
    <div class="inner-container">
      <h3 class="title">Tic tac toe games</h3>
      <div class="description">Welcome to the best game in the world</div>
      <div class="button-tabs">
        <button
          @click.prevent="selectTab('tictac')"
          :class="{ active: selectedGame === 'tictac' }"
          class="button-tab"
        >
          Tic tac toe
        </button>
        <button
          disabled
          @click.prevent="selectTab('4inrow')"
          :class="{ active: selectedGame === '4inrow' }"
          class="button-tab"
        >
          4-in-a-row
        </button>
      </div>
      <div class="game-area-container">
        <div class="center-areas">
          <div class="player-number desktop">
            <span class="label">Player</span>
            <span class="number">1</span>
          </div>
          <div class="game-area">
            <div v-if="selectedGame === 'tictac'" class="game">
              <TicTacToe />
            </div>
            <div v-if="selectedGame === '4inrow'" class="game">
              Este é o jogo 4 in a Row! Clica em começar!!!
            </div>
          </div>
          <div class="player-number desktop">
            <span class="label">Player</span>
            <span class="number">2</span>
          </div>
        </div>
        <div class="countdown">
          <div class="player-number mobile">
            <span class="label">Player</span>
            <span class="number">1</span>
          </div>
          <div class="timer">00:00:00</div>
          <div class="player-number mobile">
            <span class="label">Player</span>
            <span class="number">2</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TicTacToe from "../TicTacToe/TicTacToeGame.vue";

export default defineComponent({
  name: "GamesArena",
  components: {
    TicTacToe,
  },
  props: {},
  data() {
    return {
      selectedGame: "tictac",
    };
  },
  methods: {
    selectTab(tabName) {
      this.selectedGame = tabName;
      console.log("tab-selected: ", tabName);
    },
  },
});
</script>
