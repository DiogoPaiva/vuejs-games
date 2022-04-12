<template>
  <div class="hero-banner">
    <div class="inner-container">
      <div class="avatar">
        <div class="round-avatar">
          <img src="../../assets/images/diogo_avatar.jpg" alt="" />
        </div>
      </div>
      <div class="user-info">
        <div class="highlight">
          {{ name }}
        </div>
        <div class="text-inline">
          <span class="label">Age:&nbsp;</span>
          <span>{{ age }}</span>
        </div>
        <div class="text-inline">
          <span class="label">Location:&nbsp;</span>
          <span>{{ location }}</span>
        </div>
        <div class="text-inline">
          <span class="label">Occupation:&nbsp;</span>
          <span>{{ occupation }}</span>
        </div>
      </div>
      <div class="right-info">
        <span class="label">About me:</span>
        <span>{{ about }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeroBanner",
  data() {
    return {
      name: "Diogo Paiva",
      age: "44",
      location: "Aveiro",
      occupation: "Software Engineer",
      about:
        "lorem empus id fringilla molestie ornare diam in olestie ipsum etium rosn ollicitudin est, porttitor amet hitmassa Done cporttitor dolor shit dolor kiren lorem nisl molestie pretium etfring.",
    };
  },
  props: {},
});
</script>
