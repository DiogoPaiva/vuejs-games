<script>
import MainHeader from "./components/MainHeader/MainHeader.vue";
import MainBody from "./components/MainBody/MainBody.vue";
import MainFooter from "./components/MainFooter/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    MainBody,
    MainFooter,
  },
};
</script>

<template>
  <div>
    <MainHeader />
    <MainBody />
    <MainFooter />
  </div>
</template>
