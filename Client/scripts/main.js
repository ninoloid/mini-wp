new Vue({
  el: "#app",
  data: {
    currentPage: 'login',
    postId: '',
    title: '',
    content: '',
    published: false,
    articles: [],
    username: '',
    email: '',
    password: ''
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      const token = localStorage.getItem('user_token')
      axios({
        method: 'get',
        url: 'http://localhost:3000/articles',
        headers: { 'user_token': token }

      })
        .then(({ data }) => {
          this.articles = data
        })
        .catch(err => {
          console.log(err)
        })
    },

    getOne(id) {
      const token = localStorage.getItem('user_token')
      axios({
        method: 'get',
        url: 'http://localhost:3000/articles/${id}',
        headers: { 'user_token': token }
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
      const token = localStorage.getItem('user_token')
      axios({
        method: 'post',
        url: 'http://localhost:3000/articles',
        data: {
          title: this.title,
          content: this.content,
          created_at: new Date().toDateString(),
          published: this.published
        },
        headers: { 'user_token': token }

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
      const token = localStorage.getItem('user_token')
      axios({
        method: 'delete',
        url: `http://localhost:3000/articles/${id}`,
        headers: { 'user_token': token }
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
      const token = localStorage.getItem('user_token')
      axios({
        method: 'put',
        url: `http://localhost:3000/articles/${id}`,
        data: {
          title: this.title,
          content: this.content,
          created_at: new Date().toDateString(),
          published: this.published
        },
        headers: { 'user_token': token }
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
    },

    userLogin() {
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(success => {
          console.log('sukses', success)
          localStorage.setItem('user_token', success.data.token)
          this.currentPage = 'dashboard'
        })
        .catch(err => console.log(err))
    },

    userLogout() {
      localStorage.removeItem('user_token')
      this.currentPage = 'login'
    }
  }
})