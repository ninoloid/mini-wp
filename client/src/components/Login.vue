<template>
  <div class="row logincontainer" style="background-color: darkgray; height: 70vh;">
    <div class="col-12 mx-auto my-auto logincard" style="flex-basis: 400px; height: 220px;">
      <div class="cardcontainer">
        <div class="cardtitle">Login</div>
        <div class="cardcontent">
          <form method="post" v-on:submit.prevent="userLogin">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" />
            <p>
              <button class="btn btn-primary" style="margin-bottom: 100px;" type="submit">LOGIN</button>
              <button
                class="btn btn-primary"
                style="margin-bottom: 100px;"
                @click="redirector('register')"
              >REGISTER</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  props: ["error"],
  methods: {
    userLogin() {
      axios({
        method: "post",
        url: "http://localhost:3000/user/login",
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(success => {
          const { token, username, img_url } = success.data;
          console.log("sukses login", success);
          this.$emit("change-page", "dashboard");
          this.$emit("logged-in", username, img_url);
          localStorage.setItem("user_token", token);
        })
        .catch(err => {
          this.$emit(
            "error-message",
            "Email isn't registered or wrong password"
          );
        });
    }
  }
};
</script>

<style>
</style>