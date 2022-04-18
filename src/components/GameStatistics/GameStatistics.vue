<template>
  <div class="statistics">
    <div class="inner-container">
      <h3>Awesome Statistics</h3>
      <div class="description">All statistics in one place!</div>
      <div class="center-area">
        <div class="block game-victories">
          <h3>Game victories %</h3>
          <div class="inner-players-block">
            <div class="player-block">
              <div class="player-name">Player 1</div>
              <div class="inner-percent-stats">
                <div class="percent-stats">
                  <div class="percent-value">
                    {{ gameVictories.player1.w }}%
                  </div>
                  <div class="percent-type">W</div>
                </div>
                <div class="percent-stats">
                  <div class="percent-value">
                    {{ gameVictories.player1.l }}%
                  </div>
                  <div class="percent-type">L</div>
                </div>
              </div>
            </div>
            <div class="player-block">
              <div class="player-name">Player 2</div>
              <div class="inner-percent-stats">
                <div class="percent-stats">
                  <div class="percent-value">
                    {{ gameVictories.player2.w }}%
                  </div>
                  <div class="percent-type">W</div>
                </div>
                <div class="percent-stats">
                  <div class="percent-value">
                    {{ gameVictories.player2.l }}%
                  </div>
                  <div class="percent-type">L</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block played-matches">
          <div class="inner-block">
            <h3>Played matches</h3>
            <ul class="list-of-matchs">
              <li
                v-for="(match, index) in playedMatches"
                :key="index"
                :class="{
                  played: match === 'played',
                  empty: match === 'empty',
                }"
              ></li>
            </ul>
          </div>
          <div class="inner-block">
            <h3>Game history</h3>
            <ul class="list-of-games">
              <li v-for="(history, index) in gameHistory" :key="index">
                {{ history }}
              </li>
            </ul>
          </div>
        </div>
        <div class="block total-time">
          <h3>Total Time</h3>
          <div class="time-count">{{ totalTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { getTimeFormat } from "../../helpers/timer";

export default defineComponent({
  namespaced: true,
  name: "GameStatistics",
  props: {},
  computed: {
    ...mapGetters("gameModule", [
      "playedMatches",
      "gameHistory",
      "gameVictories",
      "totalTime",
    ]),
    getTime() {
      return getTimeFormat(3700);
    },
  },
});
</script>
