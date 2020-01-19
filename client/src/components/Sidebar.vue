<template>
  <!-- SIDEBAR -->
  <div class="sidebar grey">
    <a style="text-align: center;" @click.prevent="changePage('addPost')">
      <i class="fa fa-plus-circle"></i>
    </a>
    <a style="text-align: center;" @click="changePage('blogPost')">
      <i class="fa fa-book"></i>
    </a>
    <a style="text-align: center;" @click="changePage('drafts')">
      <i class="fas fa-edit"></i>
    </a>
  </div>
  <!-- END OF SIDEBAR -->
</template>

<script>
export default {
  methods: {
    changePage(toPage) {
      this.$emit("change-page", toPage);
    }
  }
};
</script>

<style>
</style>