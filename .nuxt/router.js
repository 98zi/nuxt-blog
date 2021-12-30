import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d7f4a76 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _784122e9 = () => interopDefault(import('..\\pages\\archives.vue' /* webpackChunkName: "pages/archives" */))
const _4697223f = () => interopDefault(import('..\\pages\\message.vue' /* webpackChunkName: "pages/message" */))
const _3031d926 = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/[_]slug" */))
const _7b46fe62 = () => interopDefault(import('..\\pages\\posts\\_slug.vue' /* webpackChunkName: "pages/posts/[_]slug" */))
const _5a83d9ee = () => interopDefault(import('..\\pages\\tags\\_slug.vue' /* webpackChunkName: "pages/tags/[_]slug" */))
const _2e0f94ec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6d7f4a76,
    name: "about"
  }, {
    path: "/archives",
    component: _784122e9,
    name: "archives"
  }, {
    path: "/message",
    component: _4697223f,
    name: "message"
  }, {
    path: "/categories/:slug?",
    component: _3031d926,
    name: "categories-slug"
  }, {
    path: "/posts/:slug?",
    component: _7b46fe62,
    name: "posts-slug"
  }, {
    path: "/tags/:slug?",
    component: _5a83d9ee,
    name: "tags-slug"
  }, {
    path: "/",
    component: _2e0f94ec,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}