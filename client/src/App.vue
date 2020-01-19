<template>
  <div>
    <MwpHeader></MwpHeader>
    <MwpContainer></MwpContainer>
  </div>
</template>

<script>
import MwpHeader from "./components/Header";
import MwpContainer from "./components/ContentContainer";
export default {
  data() {
    return {
      // currentPage: "dashboard"
    };
  },
  components: {
    MwpHeader,
    MwpContainer
  }
};
</script>

<style>
</style>