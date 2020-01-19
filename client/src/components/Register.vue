<template>
  <div class="row logincontainer" style="background-color: darkgray; height: 70vh;">
    <div class="col-12 mx-auto my-auto logincard" style="flex-basis: 400px; height: 300px;">
      <div class="cardcontainer">
        <div class="cardtitle">Register</div>
        <div class="cardcontent">
          <form method="post" v-on:submit.prevent="userRegister">
            <input
              style="margin-bottom: 10px;"
              type="text"
              v-model="username"
              placeholder="Username"
            />
            <input style="margin-bottom: 10px;" type="email" v-model="email" placeholder="Email" />
            <input
              style="margin-bottom: 10px;"
              type="password"
              v-model="password"
              placeholder="Password"
            />
            <input
              style="margin-bottom: 20px;"
              type="retype-password"
              v-model="retype"
              placeholder="Retype your password"
            />
            <p style="margin-bottom: 0;">
              <button class="btn btn-primary" type="submit">SUBMIT</button>
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
  methods: {
    userRegister() {
      axios({
        method: "post",
        url: "http://localhost:3000/user/register",
        data: {
          username: this.username,
          email: this.email,
          password: this.password
        }
      })
        .then(success => {
          console.log("sukses register", success);
          this.email = "";
          this.password = "";
          this.retype = "";
          localStorage.setItem("user_token", success.data.token);
          this.$emit("change-page", "dashboard");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>