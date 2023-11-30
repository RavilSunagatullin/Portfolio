import { createRouter, createWebHistory } from "vue-router";
import test from "@/views/test.vue";
import startPage from "@/views/startPage.vue";
import main from "@/views/main.vue";
import article from "@/views/article.vue";
import guides from "@/views/guides.vue";

import why_us from "@/views/articles/why-us.vue";

import pageNotFound from "@/views/pageNotFound.vue";
import frontEnd from "@/views/guides/frontend/frontend.vue";
import base_frontend from "@/views/guides/frontend/base-frontend.vue";
import html from "@/views/guides/frontend/html.vue";
import css from "@/views/guides/frontend/css.vue";
import js from "@/views/guides/frontend/js.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/test",
      name: "test",
      component: test,
    },
    {
      path: "/",
      name: "startPage",
      component: startPage,
    },
    {
      path: "/main",
      name: "main",
      component: main,
    },
    {
      path: "/article",
      name: "article",
      component: article,
    },
    {
      path: "/about",
      name: "why_us",
      component: why_us,
    },
    {
      path: "/guides",
      name: "guides",
      component: guides,
    },
    {
      path: "/frontend",
      name: "frontend",
      component: frontEnd,
    },
    {
      path: "/base-frontend",
      name: "base-frontend",
      component: base_frontend,
    },
    {
      path: "/html",
      name: "html",
      component: html,
    },
    {
      path: "/css",
      name: "css",
      component: css,
    },
    {
      path: "/js",
      name: "js",
      component: js,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: pageNotFound,
    },
  ],
});

export default router;
