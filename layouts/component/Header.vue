<template>
  <header class="header">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">不如吃茶去</nuxt-link>
      </h1>
      <div class="nav-menu">
        <nuxt-link to="/" class="nav-link" exact-active-class="current">博客</nuxt-link>
        <nuxt-link to="/archives/" class="nav-link" exact-active-class="current">归档</nuxt-link>
        <!-- <nuxt-link to="/tags/" class="nav-link" exact-active-class="current">标签</nuxt-link> -->
        <nuxt-link to="/photo/" class="nav-link" exact-active-class="current">相册</nuxt-link>
        <nuxt-link to="/link/" class="nav-link" exact-active-class="current">友链</nuxt-link>
        <nuxt-link to="/message/" class="nav-link" exact-active-class="current">留言</nuxt-link>
        <nuxt-link to="/about/" class="nav-link" exact-active-class="current">关于</nuxt-link>
        <nuxt-link to="/love/" class="nav-link" exact-active-class="current">爱情</nuxt-link>
      </div>
    </div>
    <div class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.header {
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 10;
  transition: all 0.2s linear;
  padding: 0 3%;
  position: fixed;
  top: 0;
  .site-name {
    height: 100%;
    z-index: 999;
    margin: 0 auto;
    max-width: 1100px;
    transition: all 0.2s linear;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      display: flex;
      align-items: center;
      a {
        display: inline-block;
        transition: all 0.2s linear;
        opacity: 0.9;
        padding: 0 8px;
        border-radius: 4px;
        font-size: 22px;
        word-break: break-all;
        font-family: BodoniModa, LXGWWenKai, serif;
        font-weight: 600;
        color: rgb(65, 65, 65);
        &:hover {
          opacity: 1;
        }
      }
    }
    .nav-menu {
      .nav-link {
        text-align: center;
        width: 100%;
        color: #333333d6;
        font-style: inherit;
        word-break: keep-all;
        padding: 6px 4px;
        box-sizing: border-box;
        font-size: 16px;
        &:hover {
          color: #000;
          text-decoration: underline;
          opacity: 0.9;
        }
        &.current {
          color: #000;
          text-decoration: underline;
        }
        i {
          &::before {
            margin-right: 4px;
          }
        }
      }
    }
  }
  .menu-icon {
    display: none;
  }
}
.scrollhead {
  box-shadow: 0 1px 5px rgb(0 0 0 / 10%);
  backdrop-filter: blur(32px);
}

@media (max-width: 600px) {
  .header {
    background: #fff;
    box-shadow: 0 1px 5px rgb(0 0 0 / 10%);
    padding: 0 3%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .site-name {
      margin: 0;
      padding: 10px 2%;
      h1 {
        transition: all 0.2s linear;
        a {
          padding: 0;
        }
      }
      .nav-menu {
        position: fixed;
        left: 0;
        top: 48px;
        width: 100%;
        background: #fff;
        box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
        transition: all 0.2s linear;
        opacity: 0;
        display: none;
        .nav-link {
          display: block;
          font-size: 18px;
        }
      }
      .menu-show {
        display: block;
        opacity: 1;
      }
    }
    .menu-icon {
      display: flex;
      justify-content: center;
      width: 50px;
      height: 40px;
      position: relative;
      margin-right: 10px;
      span {
        display: inline-block;
        width: 27px;
        height: 2px;
        background: #333;
        position: absolute;
        right: 0;
        transition: all 0.2s linear;
      }
      span:nth-child(1) {
        width: 27px;
        top: 30%;
      }
      span:nth-child(2) {
        width: 20px;
        top: 50%;
      }
      span:nth-child(3) {
        width: 24px;
        top: 70%;
      }
    }
    .menu-icon-show {
      span:nth-child(1) {
        width: 27px;
        top: 50%;
        transform: rotate(-45deg);
      }
      span:nth-child(2) {
        top: 50%;
        display: none;
      }
      span:nth-child(3) {
        width: 27px;
        top: 50%;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
