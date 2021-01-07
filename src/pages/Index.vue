<template>
  <Layout>
    <div style="width: 100%" class="lunbo">
      <el-carousel :interval="4000" arrow="always" height="500px">
        <el-carousel-item v-for="item in index_lb" :key="item" >
          <g-link :to="'/post/' + item.node.id" class="carousel-item active">
            <img :src="GRIDSOME_API_URL + item.node.cover.url" style="width: 100%; height: 100%">
          </g-link>
          <!-- <h3 class="medium">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="index-hotcity">
      <div><h2 style="font-size: 1em"><span style="font-size: 1.2em" class="iconfont icon-tuijian"></span>  热门国家<span style="font-size: 0.6em">/ HOT PROJECTS</span></h2></div>
      <ul>
        <li>澳洲</li>
        <li>澳洲</li>
        <li>澳洲</li>
        <li>澳洲</li>
        <li>澳洲</li>
      </ul>
    </div>
    <div class="index-zhuanlan_anli">
        <div class="index-zhuanlan" style="margin-bottom: 100px">
          <div><h2 style="font-size: 1em;text-align:center"><span style="font-size: 1.2em" class="iconfont icon-huiyuan"></span>  创始人专栏</h2></div>
          <div class="index_img_text boss">
            <div class="index_img boos"></div>
            <span class="index_text">这是创始人</span>
          </div>
        </div>
        <div class="index-anli">
          <div><h2 style="font-size: 1em;text-align:center"><span style="font-size: 1.2em" class="iconfont icon-bangdan"></span>  睿渡经典案例</h2></div>
          <ul>
            <li>
              <div>
                1
                <div>
                  <div>
                    <H3>三级标题</H3>
                    <button>查看详情</button>
                  </div>
                  <p>摘要mmmmmmmmmmmmmmmmmmm</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                2
                <div>
                  <div>
                    <H3>三级标题</H3>
                    <button>查看详情</button>
                  </div>
                  <p>摘要mmmmmmmmmmmmmmmmmmm</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                3
                <div>
                  <div>
                    <H3>三级标题</H3>
                    <button>查看详情</button>
                  </div>
                  <p>摘要mmmmmmmmmmmmmmmmmmm</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                4
                <div>
                  <div>
                    <H3>三级标题</H3>
                    <button>查看详情</button>
                  </div>
                  <p>摘要mmmmmmmmmmmmmmmmmmm</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- <el-button>默认按钮</el-button> -->
    </div>
    <div class="index-ao index-main">
      <div><h2 style="font-size: 1em"><span style="font-size: 1.2em" class="iconfont icon-tuijian"></span>  移民澳洲 只找睿渡</h2></div>
      <div class="index_ao_hot"></div>
      <ul>
        <li>
          <img src="" alt="">
          <div>
            <h3>对奥移民案例</h3>
            <p>案例简介1234567890</p>
          </div>
        </li>
        <li>
          <img src="" alt="">
          <div>
            <h3>对奥移民案例</h3>
            <p>案例简介1234567890</p>
          </div>
        </li>
        <li>
          <img src="" alt="">
          <div>
            <h3>对奥移民案例</h3>
            <p>案例简介1234567890</p>
          </div>
        </li>
        <li>
          <img src="" alt="">
          <div>
            <h3>对奥移民案例</h3>
            <p>案例简介1234567890</p>
          </div>
        </li>
        <li>
          <img src="" alt="">
          <div>
            <h3>对奥移民案例</h3>
            <p>案例简介1234567890</p>
          </div>
        </li>
        <li>
          <img src="" alt="">
          <div>
            <h3>对奥移民案例</h3>
            <p>案例简介1234567890</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-hz index-main">
      <div><h2 style="font-size: 1em"><span style="font-size: 1.2em" class="iconfont icon-ka"></span>  全球绿卡 护照专家</h2></div>
      <ul>
        <li>
          <div><h3>国家</h3></div>
          <div>
            <h3>标题</h3>
            <p>摘要。。。。。。。。。。。。。。。。。。。。</p>
            <button>查看详情</button>
          </div>
        </li>
        <li>
          <div><h3>国家</h3></div>
          <div>
            <h3>标题</h3>
            <p>
              af df asd fsad f asd f asdf asd f asd f
              摘要上帝发誓
            </p>
            <button>查看详情</button>
          </div>
        </li>
        <li>
          <div><h3>国家</h3></div>
          <div>
            <h3>标题</h3>
            <p>摘要。。。。。。。。。。。。。。。。。。。。</p>
            <button>查看详情</button>
          </div>
        </li>
        <li>
          <div><h3>国家</h3></div>
          <div>
            <h3>标题</h3>
            <p>摘要。。。。。。。。。。。。。。。。。。。。</p>
            <button>查看详情</button>
          </div>
        </li>
        <li>
          <div><h3>国家</h3></div>
          <div>
            <h3>标题</h3>
            <p>摘要。。。。。。。。。。。。。。。。。。。。</p>
            <button>查看详情</button>
          </div>
        </li>
        <li>
          <div><h3>国家</h3></div>
          <div>
            <h3>标题</h3>
            <p>摘要。。。。。。。。。。。。。。。。。。。。</p>
            <button>查看详情</button>
          </div>
        </li>
      </ul>
    </div>
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="'/post/' + edge.node.id">
              <h2 class="post-title">{{ edge.node.title }}</h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <g-link
                href="#"
              >{{ edge.node.created_by.firstname + edge.node.created_by.lastname }}</g-link>
              on {{ edge.node.created_at }}
            </p> 
            <p>
              <span v-for="tag in edge.node.tags" :key="tag.id">
                <g-link :to="'/tag/' + tag.id">{{ tag.title }}</g-link>
                &nbsp;&nbsp;
              </span>
            </p>
            <hr />
          </div>
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
      index_lb: []
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
  },
  methods: {
    getpost (e) {
      let edges = this.$page.posts.edges
      let arr = []
      for (let key in edges) {
        let tage = edges[key].node.tags[0].title
        console.log(edges[key].node.tags[0].title)
        if(tage == e) {
          arr.push(edges[key])
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
  margin-top: 170px;
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


</style>
