<template>
  <div class="layout">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style="width:100%">
      <div class="container" style="margin: 0px; width: 100%">
        <div class="page-header" style="position: revative; width: 100%">
          <g-link style="width: 60%; padding-left: 20px" class="navbar-brand img-responsive" to="/"><H1><img src="../assets/img/睿渡.png" width="50%" alt="Raidoo睿渡移民" style="min-width: 150px"></H1></g-link>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            style="margin-top: 14px; height:40px; position: absolute; right: 16px;"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars">Menu</i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive" style="">
            <ul style="width:100%" class="navbar-nav ml-auto d-flex  justify-content-around">
              <li class="nav-item">
                <g-link class="nav-link" to="/">首页</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/">移民热门</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/">护照办理</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/">睿渡动态</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/">成功案例</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/">海外资产</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/about">关于我们</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/contact">联系我们</g-link>
              </li>
              <li>
                <form class="navbar-form navbar-left" role="search">
                  <div class="form-group d-inline-flex" style="float: left;position: relative;">
                      <input type="text" class="form-control" placeholder="Search">
                      <button type="submit" class="btn btn-default sousuo"><span class="iconfont icon-sousuo"></span></button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>


    <!-- 默认插槽 -->
    <slot />

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <p class="copyright text-muted">Copyright &copy; Your Website 2020</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
export default {
  metaInfo: {
    title: "Raidoo睿渡-主页",
  },
  // name: 'HomePage',
  components: {
    // Pager
  },
  computed: {
    // general () {
    //   return this.$page.general.edges[0].node
    // }
  }
};
</script>

<style>
.icon-sousuo:before {
  font-size: 24px;
}
.sousuo {
  position: absolute;
  right: -20px;
  bottom: -14px;
}
.container {
  /* width: 2000px !important; */
  max-width: 100% !important;
}
</style>
