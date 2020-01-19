<template>
  <div>
    <MwpHeader :currentPage="currentPage" :user="user" :profilePic="profilePic"></MwpHeader>
    <MwpContainer
      :currentPage="currentPage"
      :user="user"
      :profilePic="profilePic"
      @registered-user="setUser"
    ></MwpContainer>
  </div>
</template>

<script>
import MwpHeader from "./components/Header";
import MwpContainer from "./components/ContentContainer";
export default {
  data() {
    return {
      user: "",
      profilePic: "",
      currentPage: "register"
    };
  },
  components: {
    MwpHeader,
    MwpContainer
  },
  methods: {
    setUser(username, pic) {
      this.user = username;
      this.profilePic = pic;
    }
  },
  created() {
    // if (!localStorage.getItem("user_token")) this.currentPage = "login";
    // else this.currentPage = "dashboard";
  }
};
</script>

<style>
</style>