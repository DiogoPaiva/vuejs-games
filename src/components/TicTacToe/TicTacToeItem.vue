<template>
  <button
    class="square-item"
    @click="play"
    :class="{ green: value === 'O', red: value === 'X' }"
  >
    {{ value }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicTacToeItem",
  props: {
    value: String,
  },
  methods: {
    play() {
      this.$emit("play");
    },
  },
});
</script>

<style lang="scss" scoped>
.square-item {
  width: 120px;
  height: 180px;
  border: 2px solid rgb(75, 75, 75);
  font-size: 42px;
  display: flex;
  flex: 0 1 33%;
  justify-content: center;
  align-items: center;
  background-color: $white;
  font-size: 90px;
  font-weight: bold;
  &.red {
    color: $red;
  }
  &.green {
    color: $green;
  }
}
</style>
