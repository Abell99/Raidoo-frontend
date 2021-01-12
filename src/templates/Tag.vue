<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg'); margin-top: 180px">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1> # {{ $page.tag.title}}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <!-- <el-card class="box-card"  v-for="post in $page.tag.posts" :key="post.id" style="margin-bottom: 20px">
            <div slot="header" class="clearfix">
              <h4>{{ post.title }}</h4>
              <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
            </div>
            <div>
              <el-image
              style="width: 100px; height: 100px"
              :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"
              :fit="fit"></el-image>
            </div>
          </el-card> -->
          <div class="post-preview" v-for="post in $page.tag.posts" :key="post.id">
            <g-link :to="'/post/' + post.id">
              <h2 class="post-title">{{ post.title }}</h2>
              <!-- <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3> -->
            </g-link>
            <!-- <p class="post-meta">
              Posted by
              <g-link
                href="#"
              >{{ post.created_by.firstname + post.created_by.lastname }}</g-link>
              on {{ post.created_at }}
            </p>
            <p>
              <span v-for="tag in edge.node.tags" :key="tag.id">
                <g-link :to="'/tag/' + tag.id">{{ tag.title }}</g-link>
                &nbsp;&nbsp;
              </span>
            </p> -->
            <hr />
          </div>
          <!-- <pager :info="$page.posts.pageInfo"></pager> -->
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag: strapiTag (id: $id) {
    id
    title
    posts {
      id
      title
    }
  }
}
</page-query>

<script>
export default {
  name: 'TagPage'
}
</script>

<style>

</style>