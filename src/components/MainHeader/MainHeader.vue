<template>
  <div class="header">
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

<script>
export default {
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
      scrolled: false,
    };
  },
  methods: {
    onScroll() {
      console.log("this.lastPosition", this.lastPosition);
      console.log("window.scrollY", window.scrollTop);
    },
    created() {
      window.addEventListener("scroll", this.onScroll);
    },
    unmounted() {
      window.removeEventListener("scroll", this.onScroll);
    },
  },
};
</script>
