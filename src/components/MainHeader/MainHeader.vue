<template>
  <div class="header" :class="{ opacity: this.opacity === true }">
    <div class="inner-container">
      <div class="logo">
        <img
          src="../../assets/images/SWORD_Health_logo.svg"
          class="logo-img"
          alt="Logo-Sword"
        />
      </div>
      <div class="info-right">
        <div class="font-bold">{{ title }}</div>
        <div class="font-italic">{{ subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainHeader",
  props: {
    title: {
      type: String,
      default: "Frontend developer",
    },
    subtitle: {
      type: String,
      default: "Challenge",
    },
  },
  data() {
    return {
      opacity: false,
    };
  },
  methods: {
    onScroll() {
      if (window.scrollY >= 150) {
        // Add opacity to header
        this.opacity = true;
      } else {
        this.opacity = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },
});
</script>
