<template>
  <b-row class="header">
    <b-col class="grey" style="flex: 0 0 50px;">
      <i class="fab fa-wordpress" aria-hidden="true"></i>
    </b-col>
    <b-col>
      <b-row></b-row>
    </b-col>
    <b-col v-if="currentPage !== 'login'" style="flex: 0 0 150px;">
      <b-row>
        <b-col>Nama</b-col>
      </b-row>
    </b-col>
    <b-col v-if="currentPage !== 'login'" style="flex: 0 0 50px;">
      <b-row>
        <b-col style="padding: 0;">Foto</b-col>
      </b-row>
    </b-col>
    <b-col style="flex: 0 0 100px; padding: 0;" v-if="currentPage !== 'login'">
      <button class="headerbutton" @click="userLogout">LOGOUT</button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: String
    }
  }
};
</script>

<style>
</style>