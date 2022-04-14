<template>
  <div class="main-body">
    <HeroBanner />
    <GamesArena />
    <GameStatistics />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroBanner from "../HeroBanner/HeroBanner.vue";
import GamesArena from "../GamesArena/GamesArena.vue";
import GameStatistics from "../GameStatistics/GameStatistics.vue";

export default defineComponent({
  name: "MainBody",
  props: {},
  components: {
    HeroBanner,
    GamesArena,
    GameStatistics,
  },
});
</script>
