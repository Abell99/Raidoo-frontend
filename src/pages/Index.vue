<template>
  <Layout>
    <div style="width: 100%" class="lunbo">
      <el-carousel :interval="4000" arrow="always" height="500px">
        <el-carousel-item v-for="item in index_lb" :key="item.node.id" >
          <g-link :to="'/post/' + item.node.id" class="carousel-item active">
            <img :src="GRIDSOME_API_URL + item.node.cover.url" style="width: 100%; height: 500px">
          </g-link>
          <!-- <h3 class="medium">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="index-hotcity">
      <div><h2 style="font-size: 1em"><span style="font-size: 1.2em" class="iconfont icon-tuijian"></span>  热门国家     <span style="font-size: 0.6em">/ HOT PROJECTS</span></h2></div>
      <ul>
        <li style="list-style: none">
          <el-dropdown>
            <span class="el-dropdown-link" style="color: white">
              澳大利亚<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown"  divided="true">
              <el-dropdown-item><g-link :to="'/tag/'+ '7'">澳洲 188A</g-link></el-dropdown-item>
              <el-dropdown-item><g-link :to="'/tag/'+ '8'">澳洲 188B</g-link></el-dropdown-item>
              <el-dropdown-item><g-link :to="'/tag/'+ '9'">澳洲 188C</g-link></el-dropdown-item>
              <el-dropdown-item><g-link style="color: darkgray" :to="'/tag/'+ '澳洲 188D'">澳洲 132</g-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li style="list-style: none">
          <el-dropdown>
            <span class="el-dropdown-link" style="color: white">
              魁北克<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <!-- <el-dropdown-menu slot="dropdown"  divided="true">
              <el-dropdown-item><g-link :to="'/tag/'+ '7'">魁北克 188A</g-link></el-dropdown-item>
              <el-dropdown-item><g-link :to="'/tag/'+ '8'">魁北克 188B</g-link></el-dropdown-item>
              <el-dropdown-item><g-link :to="'/tag/'+ '9'">魁北克 188C</g-link></el-dropdown-item>
              <el-dropdown-item><g-link style="color: darkgray" :to="'/tag/'+ '澳洲 188D'">澳洲 132</g-link></el-dropdown-item>
            </el-dropdown-menu> -->
          </el-dropdown>
        </li>
        <li style="list-style: none">
          <el-dropdown>
            <span class="el-dropdown-link" style="color: white">
              新西兰<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <!-- <el-dropdown-menu slot="dropdown"  divided="true">
              <el-dropdown-item><g-link :to="'/tag/'+ '7'">新西兰 188A</g-link></el-dropdown-item>
              <el-dropdown-item><g-link :to="'/tag/'+ '8'">新西兰 188B</g-link></el-dropdown-item>
              <el-dropdown-item><g-link :to="'/tag/'+ '9'">新西兰 188C</g-link></el-dropdown-item>
              <el-dropdown-item disabled><g-link style="color: darkgray" :to="'/tag/'+ '澳洲 188D'">新西兰 188D</g-link></el-dropdown-item>
            </el-dropdown-menu> -->
          </el-dropdown>
        </li>
      </ul>
    </div>
    <div class="index-zhuanlan_anli">
        <div class="index-zhuanlan" style="margin-bottom: 100px;" >
          <div>
            <h2 style="font-size: 2em;text-align:center; padding-bottom: 20px"><span style="font-size: 1.2em" class="iconfont icon-huiyuan"></span>  创始人专栏</h2>
          </div>
          <el-card shadow="always" style=" width: 100%;height: 100%;" class="index_img_text boss">
            <g-link class="index_img boos" :to="'/post/' + index_csr[0].node.id" style="width: 100%; height: 100%">
              <img :src="GRIDSOME_API_URL + index_csr[0].node.cover.url" style="width: 100%; height: 100%">
              <span class="index_text" style="width: 100%">这是创始人</span>
            </g-link>
          </el-card>
         </div>
        <div class="index-anli">
          <div><h2 style="font-size: 2em;text-align:center; padding-bottom: 20px"><span style="font-size: 1.2em" class="iconfont icon-bangdan"></span>  睿渡移民热点     </h2></div>
          <ul>
            <li>
              <el-card shadow="hover" style="border: 0px"
              :style="{
                backgroundImage: `url(${ GRIDSOME_API_URL + index_rd[0].node.cover.url})`
              }">
                <div class="ymrd">
                  <div>
                    <g-link :to="'/post/' + index_rd[0].node.id"><H5>{{index_rd[0].node.title}}</H5></g-link>
                  </div>
                  <p>{{index_rd[0].node.synopsis}}</p>
                </div>
              </el-card>
            </li>
            <li>
              <el-card shadow="hover" style="border: 0px"
              :style="{
                backgroundImage: `url(${ GRIDSOME_API_URL + index_rd[1].node.cover.url})`
              }">
                <div class="ymrd">
                  <div>
                    <g-link :to="'/post/' + index_rd[1].node.id"><H5>{{index_rd[1].node.title}}</H5></g-link>
                  </div>
                  <p>{{index_rd[1].node.synopsis}}</p>
                </div>
              </el-card>
            </li>
            <li>
              <el-card shadow="hover" style="border: 0px"
              :style="{
                backgroundImage: `url(${ GRIDSOME_API_URL + index_rd[2].node.cover.url})`
              }">
                <div class="ymrd">
                  <div>
                    <g-link :to="'/post/' + index_rd[2].node.id"><H5>{{index_rd[2].node.title}}</H5></g-link>
                  </div>
                  <p>{{index_rd[2].node.synopsis}}</p>
                </div>
              </el-card>
            </li>
            <li>
              <el-card shadow="hover" style="border: 0px"
              :style="{
                backgroundImage: `url(${ GRIDSOME_API_URL + index_rd[3].node.cover.url})`
              }">
                <div class="ymrd">
                  <div>
                    <g-link :to="'/post/' + index_rd[3].node.id"><H5>{{index_rd[3].node.title}}</H5></g-link>
                  </div>
                  <p>{{index_rd[3].node.synopsis}}</p>
                </div>
              </el-card>
            </li>
          </ul>
        </div>
        <!-- <el-button>默认按钮</el-button> -->
    </div>
    <div class="index-ao index-main">
      <div><h2 style="font-size: 2em;text-align:center; padding-bottom: 20px"><span style="font-size: 1.2em" class="iconfont icon-shengyin
"></span>  移民澳洲  只找睿渡     </h2></div>
      <el-card class="index_ao_hot block" style="margin-bottom: 30px" shadow="always">
          <!-- <span class="demonstration">默认</span> -->
          <g-link :to="'/post/' + index_js[0].node.id"  style="padding: 14px;width: 100%;height: 100%;padding:0px">
            <el-image :src="GRIDSOME_API_URL + index_js[0].node.cover.url" style="width: 100%; height: 100%"></el-image>
          </g-link>
      </el-card>
      <el-row class="index_al">
        <el-card v-for="item in index_al" :key="item.node.id" shadow="hover">
          <g-link :to="'/post/' + item.node.id" style="padding: 14px;width: 100%;height: 100%;padding:0px">
            <el-image :src="GRIDSOME_API_URL + item.node.cover.url" style="width: 100%; height: 70%"></el-image>
            <h4 style="font-size: 20px;font-weight: 800;padding:10px;margin:0px">{{item.node.title}}</h4>
            <p>
                <g-link :to="'/tag/' + i.id" v-show="i.title != '移民案例'" v-for="i in item.node.tags" :key="i.id">#{{ i.title }}&nbsp&nbsp&nbsp&nbsp</g-link>
            </p>
          </g-link>
        </el-card>
      </el-row>
    </div>
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPost ( page: $page) @paginate {
    edges {
      node {
        id
        title
        synopsis
        cover {
          url
        }
        created_by {
          id
          firstname
          lastname
        }
        tags {
          id
          title
        }
        created_at
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import '../assets/css/index_01.css'
// import '../assets/js/index.js'
// import 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

export default {
  data() {
    return {
      index_lb: [],
      index_csr: [],
      index_rd: [],
      index_al: []
    }
  },
  metaInfo: {
    title: "Hello, world!",
  },
  name: 'HomePage',
  components: {
    Pager
  },
  computed: {
    posts () {
      return this.$page.posts  
    }
  },
  created() {
    this.index_lb = this.getpost('主页轮播')
    this.index_csr = this.getpost('创始人')
    this.index_rd = this.getpost('移民热点')
    this.index_js = this.getpost('移民介绍')
    this.index_al = this.getpost('移民案例')
  },
  methods: {
    getpost (e) {
      let edges = this.$page.posts.edges
      let arr = []
      for (let key in edges) {
        let tags = edges[key].node.tags
        for (let item in tags) {
          if (tags[item].title == e) {
            arr.push(edges[key])
          }
        }
      }
      return arr
    }

/*     async toPost (e) {
      const { id } = e
      const response = await fetch(`/post/${id}`)
      this.user = await response.json()
    } */
  },
  
};
</script>

<style>
.carousel-inner > .carousel-item > img {
  width: 100%;
}
.carousel-inner > .carousel-item > img {
  min-width: 100%;
  min-height: 300px;
}
.lunbo {
  /* position: relative; */
  margin-top: 176px;
}
/* .lunbo > .carousel-inner {
  position: absolute;
  bottom: 0px;
} */

.index-hotcity {
  background-color: #B68B29;
  margin-top: 20px;
  width: 100%;
  color: white;
  padding-left: 16px;
  padding-right: 16px;
}
.index-hotcity > ul {
  background-color: #B68B29;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.index-hotcity > ul > li {
  padding-right: 40px;
}

.index-zhuanlan_anli {
  margin: 0px auto;
  width: 90%;
  /* padding-top: 200px; */
  /* background-image: url('../assets/img/index-start.png'); */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.index-zhuanlan_anli > .index-zhuanlan {
  width: 360px;
  height: 600px;
  /* background-color: teal; */
}
.index-zhuanlan_anli > .index-anli {
  width: 900px;
  /* height: 600px; */
  /* background-color: rgb(107, 0, 128); */
}
.el-card__body {
  padding: 0px;
  height: 100%;
  width: 100%;
}
body {
  background: url('../assets/img/background.jpg');
}
.ymrd {
  height: 160px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column
}
.ymrd > div {
  background-color: rgba(75, 42, 42, 0);
  width: 100%;
  height: 50px; 
  display: flex;
  justify-content: space-between;
}
</style>
