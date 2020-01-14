new Vue({
  el: "#app",
  data: {
    currentPage: 'blogPost',
    postId: '',
    title: '',
    content: '',
    published: false,
    articles: []
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios({
        method: 'get',
        url: 'http://localhost:3000/articles',

      })
        .then(({ data }) => {
          this.articles = data
        })
        .catch(err => {
          console.log(err)
        })
    },

    getOne(id) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/articles/${id}',

      })
        .then(({ data }) => {
          this.title = data.title
          this.content = data.content
        })
        .catch(err => {
          console.log(err)
        })
    },

    addArticle() {
      axios({
        method: 'post',
        url: 'http://localhost:3000/articles',
        data: {
          title: this.title,
          content: this.content,
          created_at: new Date().toDateString(),
          published: this.published
        }

      })
        .then(() => {
          this.getArticles()
          this.title = ''
          this.content = ''
          this.published = false
          this.currentPage = 'blogPost'
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteArticle(id) {
      axios({
        method: 'delete',
        url: `http://localhost:3000/articles/${id}`
      })
        .then(() => {
          this.getArticles()
        })
        .catch(err => {
          console.log(err)
        })
    },

    toEditPage(id, title, content) {
      this.postId = id
      this.title = title
      this.content = content
      this.currentPage = 'editPost'
    },

    redirector(page) {
      this.currentPage = page
    },

    editArticle(id) {
      axios({
        method: 'put',
        url: `http://localhost:3000/articles/${id}`,
        data: {
          title: this.title,
          content: this.content,
          created_at: new Date().toDateString(),
          published: this.published
        }

      })
        .then(() => {
          this.getArticles()
          this.postId = ''
          this.title = ''
          this.content = ''
          this.published = false
          this.currentPage = 'blogPost'
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})