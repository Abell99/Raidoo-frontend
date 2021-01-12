<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" 
    :style="{
      backgroundImage: `url(${GRIDSOME_API_URL + $page.post.cover.url})`
    }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{ $page.post.title }}</h1>
              <!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
              <span class="meta">
                                                 by
                <a href="#">{{ $page.post.created_by.firstname + $page.post.created_by.lastname }}</a>
                on  {{ $page.post.created_at.split("T")[0] }}
              </span>
              <br>
              <p>
                  <g-link style="color: gainsboro; text-decoration:none;" :to="'/tag/' + i.id" v-show="i.title != '移民案例' &&  i.title != '主页轮播' &&  i.title != '创始人' &&  i.title != '移民热点' &&  i.title != '移民介绍'" v-for="i in $page.post.tags" :key="i.id">#{{ i.title }}&nbsp&nbsp&nbsp&nbsp</g-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto" v-html="$page.post.content">
          
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>
<page-query>
  query ($id: ID!) {
    post: strapiPost (id: $id) {
      id
      title
      content
      created_by {
        id
        firstname
        lastname
      }
      created_at
      cover {
        url
      }
      tags {
        id
        title
      }
    }
  }
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name: 'PostPage',
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown)
    }

  }
};
</script>

<style>
.masthead {
  /* position: relative; */
  margin-top: 180px;
}
</style>