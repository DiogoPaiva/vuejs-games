<script>
import HeroBanner from "../HeroBanner/HeroBanner.vue";
import GamesArena from "../GamesArena/GamesArena.vue";
import GameStatistics from "../GameStatistics/GameStatistics.vue";

export default {
  name: "MainBody",
  props: {},
  components: {
    HeroBanner,
    GamesArena,
    GameStatistics,
  },
};
</script>
<template>
  <div class="main-body">
    <HeroBanner />
    <GamesArena />
    <GameStatistics />
  </div>
</template>
