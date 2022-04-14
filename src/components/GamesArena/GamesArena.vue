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
          <div
            class="player-number desktop"
            :class="{ active: player.name === 'Player1' }"
          >
            <span class="label">Player</span>
            <span class="number">1</span>
          </div>
          <div class="game-area">
            <div v-if="selectedGame === 'tictac'" class="game">
              <TicTacToe @player="getPlayer" />
            </div>
            <div v-if="selectedGame === '4inrow'" class="game"></div>
          </div>
          <div
            class="player-number desktop"
            :class="{ active: player.name === 'Player2' }"
          >
            <span class="label">Player</span>
            <span class="number">2</span>
          </div>
        </div>
        <div class="countdown">
          <div
            class="player-number mobile"
            :class="{ active: player.name === 'Player1' }"
          >
            <span class="label">Player</span>
            <span class="number">1</span>
          </div>
          <div class="timer">00:00:00</div>
          <div
            class="player-number mobile"
            :class="{ active: player.name === 'Player2' }"
          >
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
import { IPlayer } from "../../interfaces/global.interface";

export default defineComponent({
  name: "GamesArena",
  components: {
    TicTacToe,
  },
  props: {},
  data() {
    return {
      selectedGame: "tictac",
      player: {},
    };
  },
  methods: {
    selectTab(tabName: string) {
      this.selectedGame = tabName;
    },
    getPlayer(player: IPlayer) {
      this.player = player;
    },
  },
});
</script>
