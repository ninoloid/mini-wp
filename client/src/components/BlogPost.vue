<template>
  <div class="row blogpost">
    <div class="col">
      <h1>Blog Posts</h1>
    </div>
    <div class="col-12">
      <div class="card text-center">
        <div class="card-header"></div>
        <!-- ISINYA DISINI -->
        <div class="card-header grey">PUBLISHED</div>
        <div
          class="card-body articleList"
          v-for="article in published"
          :key="article._id"
          v-if="article.published"
        >
          <div class="card" style="margin-bottom: 0;">
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ article.created_at }}</h6>
              <p class="card-text">{{ article.content }}</p>
            </div>
            <div style="margin-bottom: 1rem;">
              <button class="btn btn-danger" @click="deleteArticle(article._id)">Delete</button>
              <button
                class="btn btn-success"
                @click="toEditPage(article._id, article.title, article.content)"
              >Update</button>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <button class="btn btn-primary" @click="redirector('dashboard')">BACK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getArticles();
  },
  data() {
    return {
      published: []
    };
  },
  methods: {
    getArticles() {
      const token = localStorage.getItem("user_token");
      axios({
        method: "get",
        url: "http://localhost:3000/articles",
        headers: { user_token: token }
      })
        .then(({ data }) => {
          this.published = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteArticle(id) {
      const token = localStorage.getItem("user_token");
      axios({
        method: "delete",
        url: `http://localhost:3000/articles/${id}`,
        headers: { user_token: token }
      })
        .then(() => {
          this.getArticles();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>