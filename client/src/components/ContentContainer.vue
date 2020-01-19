<template>
  <!-- --------------------------------------------- VUE PAGE CONTAINER -------------------------------------------- -->
  <div class="container">
    <!-- SIDEBAR -->
    <MwpSidebar @change-page="redirector"></MwpSidebar>
    <!-- END OF SIDEBAR -->

    <!-- CONTENT -->
    <div class="content">
      <!-- LOGIN -->
      <div v-if="currentPage==='login'" id="login">
        <MwpLogin @change-page="redirector"></MwpLogin>
      </div>
      <!-- END OF LOGIN -->

      <!-- REGISTER -->
      <div v-if="currentPage==='register'" id="register">
        <MwpRegister @change-page="redirector"></MwpRegister>
      </div>
      <!-- END OF REGISTER -->

      <!-- DASHBOARD -->
      <div v-else-if="currentPage==='dashboard'" id="dashboard">
        <!-- UPPERCARD -->
        <MwpUppercard></MwpUppercard>
        <!-- END OF UPPERCARD -->

        <!-- LOWERCARD -->
        <MwpLowercard></MwpLowercard>
        <!-- END OF LOWERCARD -->
      </div>
      <!-- END OF DASHBOARD -->

      <!-- ADD POST -->
      <div v-else-if="currentPage==='addPost'" id="addPost">
        <MwpAddPost @change-page="redirector"></MwpAddPost>
      </div>
      <!-- END OF ADD POST -->

      <!-- BLOG POST -->
      <div v-else-if="currentPage==='blogPost'" id="blogPost">
        <MwpBlogPost></MwpBlogPost>
      </div>
      <!-- END OF BLOG POST -->

      <!-- EDIT POST -->
      <div v-else-if="currentPage==='editPost'" id="editPost">
        <MwpEditPost></MwpEditPost>
      </div>
      <!-- END OF EDIT POST -->
    </div>
    <!-- END OF CONTENT -->
  </div>
  <!-- ----------------------------------------- END OF VUE PAGE CONTAINER ------------------------------------------ -->
</template>

<script>
import MwpSidebar from "./Sidebar";
import MwpLogin from "./Login";
import MwpRegister from "./Register";
import MwpUppercard from "./Uppercard";
import MwpLowercard from "./Lowercard";
import MwpAddPost from "./AddPost";
import MwpBlogPost from "./BlogPost";
import MwpEditPost from "./EditPost";

export default {
  data() {
    return {
      currentPage: "login",
      username: "",
      email: "",
      password: ""
    };
  },
  components: {
    MwpSidebar,
    MwpLogin,
    MwpRegister,
    MwpUppercard,
    MwpLowercard,
    MwpAddPost,
    MwpBlogPost,
    MwpEditPost
  },
  methods: {
    redirector(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style>
</style>