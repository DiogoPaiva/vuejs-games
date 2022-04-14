<template>
  <div>
    <MainHeader />
    <MainBody />
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "./components/MainHeader/MainHeader.vue";
import MainBody from "./components/MainBody/MainBody.vue";
import MainFooter from "./components/MainFooter/MainFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    MainHeader,
    MainBody,
    MainFooter,
  },
});
</script>
