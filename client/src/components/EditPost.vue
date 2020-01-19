<template>
  <div class="row newpost">
    <div class="col">
      <h1>Edit Post</h1>
    </div>
    <div class="col-12">
      <div class="card text-center">
        <div class="card-header">Edit Post</div>
        <div class="card-body">
          <div class="cardcontent nopadding">
            <form method="post" v-on:submit.prevent="editArticle(postId)">
              <div class="row">
                <div class="col">
                  <input v-model="title" type="text" style="width: 100%;" />
                </div>
              </div>
              <!-- <div class="row" style="margin: 10px 0;">
                        <div class="col">
                          tombol bold italic dll disini
                        </div>
              </div>-->
              <div class="row">
                <div class="col">
                  <textarea v-model="content" style="width: 100%; height: 30vh;"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="checkbox" v-model="published" value="true" /> I wanna publish this article.
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button class="btn btn-success roundedButton" type="submit">Submit</button>
                  <button class="btn btn-primary roundedButton" @click="redirector('blogPost')">Back</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>