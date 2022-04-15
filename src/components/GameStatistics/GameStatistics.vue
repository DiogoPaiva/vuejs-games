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
                  <div class="percent-value">100%</div>
                  <div class="percent-type">W</div>
                </div>
                <div class="percent-stats">
                  <div class="percent-value">10%</div>
                  <div class="percent-type">L</div>
                </div>
              </div>
            </div>
            <div class="player-block">
              <div class="player-name">Player 2</div>
              <div class="inner-percent-stats">
                <div class="percent-stats">
                  <div class="percent-value">0%</div>
                  <div class="percent-type">W</div>
                </div>
                <div class="percent-stats">
                  <div class="percent-value">0%</div>
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
              <li class="played"></li>
              <li class="played"></li>
              <li class="played"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="inner-block">
            <h3>Game history</h3>
            <ul class="list-of-games">
              <li v-for="(history, index) in gameVictories" :key="index">
                {{ history }}
              </li>
            </ul>
          </div>
        </div>
        <div class="block total-time">
          <h3>Total Time</h3>
          <div class="time-count">00:44:12</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "GameStatistics",
  props: {},
  computed: {
    ...mapGetters(["playedMatches", "gameHistory", "gameVictories"]),
  },
});
</script>
