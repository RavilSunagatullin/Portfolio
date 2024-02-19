import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    lightTheme: true,
    whyUsTxt: [
      "article-why-us.paragraph_1",
      "article-why-us.paragraph_2",
      "article-why-us.paragraph_3",
      "article-why-us.paragraph_4",
      "article-why-us.paragraph_5",
    ],
    mainArticleTxt: {
      article_1: {
        title: "articles-titles.about",
        to: "/about",
      },
    },
    mainGuidesTxt: [
      {
        frontend: {
          title: "technologies.frontend",
          to: "/frontend",
        },
      },
      {
        Html: {
          title: "technologies.html",
          to: "/html",
        },
        js: {
          title: "technologies.js",
          to: "/js",
        },
        Css: {
          title: "technologies.css",
          to: "/css",
        },
      },
    ],
    frontendPageTxt: {
      article_1: {
        title: "frontend-page.article_1-title",
        haveButton: false,
        description: {
          paragraph_1: "frontend-page.paragraph_1-1",
          paragraph_2: "frontend-page.paragraph_1-2",
        },
        id: 1,
      },
      article_2: {
        title: "frontend-page.article_2-title",
        haveButton: true,
        label: "frontend-page.article_2-label",
        to: "/base-frontend",
        description: {
          paragraph_1: "frontend-page.paragraph_2-1",
          paragraph_2: "frontend-page.paragraph_2-2",
          paragraph_3: "frontend-page.paragraph_2-3",
        },
        id: 2,
      },
      article_3: {
        title: "frontend-page.article_3-title",
        // haveButton: true,
        // label: "frontend-page.article_3-label",
        // to: "/git",
        description: {
          paragraph_1: "frontend-page.paragraph_3-1",
          paragraph_2: "frontend-page.paragraph_3-2",
          paragraph_3: "frontend-page.paragraph_3-3",
        },
        id: 3,
      },
      article_4: {
        title: "frontend-page.article_4-title",
        // haveButton: true,
        // label: "frontend-page.article_4-label",
        // to: "/framewroks",
        description: {
          paragraph_1: "frontend-page.paragraph_4-1",
          paragraph_2: "frontend-page.paragraph_4-2",
          paragraph_3: "frontend-page.paragraph_4-3",
        },
        id: 4,
      },
      article_5: {
        title: "frontend-page.article_5-title",
        // haveButton: true,
        // label: "frontend-page.article_5-label",
        // to: "/other-tools",
        description: {
          paragraph_1: "frontend-page.paragraph_5-1",
          paragraph_2: "frontend-page.paragraph_5-2",
          paragraph_3: "frontend-page.paragraph_5-3",
          paragraph_4: "frontend-page.paragraph_5-4",
        },
        id: 5,
      },
      article_6: {
        title: "frontend-page.article_6-title",
        // haveButton: true,
        // label: "frontend-page.article_6-label",
        // to: "/tests",
        description: {
          paragraph_1: "frontend-page.paragraph_6-1",
          paragraph_2: "frontend-page.paragraph_6-2",
        },
        id: 6,
      },
      article_7: {
        title: "frontend-page.article_7-title",
        // haveButton: true,
        // label: "frontend-page.article_7-label",
        // to: "/froms web",
        description: {
          paragraph_1: "frontend-page.paragraph_7-1",
          paragraph_2: "frontend-page.paragraph_7-2",
          paragraph_3: "frontend-page.paragraph_7-3",
          paragraph_4: "frontend-page.paragraph_7-4",
        },
        id: 7,
      },
    },
    baseFrontedTxt: {
      article_1: {
        title: "base-frontend.article_1-title",
        haveButton: true,
        label: "base-frontend.article_1-label",
        to: "/html",
        description: {
          paragraph_1: "base-frontend.paragraph_1",
        },
        id: 1,
      },
      article_2: {
        title: "base-frontend.article_2-title",
        haveButton: true,
        label: "base-frontend.article_2-label",
        to: "/css",
        description: {
          paragraph_1: "base-frontend.paragraph_2",
        },
        id: 2,
      },
      article_3: {
        title: "base-frontend.article_3-title",
        haveButton: true,
        label: "base-frontend.article_3-label",
        to: "/js",
        description: {
          paragraph_1: "base-frontend.paragraph_3",
        },
        id: 3,
      },
    },
    cssPageTxt: {
      article_1: {
        title: "css.article_1-title",
        haveButton: false,
        description: {
          paragraph_1: "css.paragraph_1",
          paragraph_2: "css.paragraph_1-2",
          paragraph_3: "css.paragraph_1-3",
          paragraph_4: "css.paragraph_1-4",
        },
        id: 1,
      },
      article_2: {
        title: "css.article_2-title",
        haveButton: false,
        description: {
          paragraph_1: "css.paragraph_2",
          paragraph_2: "css.paragraph_2-2",
          paragraph_3: "css.paragraph_2-3",
          paragraph_4: "css.paragraph_2-4",
          paragraph_4: "css.paragraph_2-5",
          paragraph_4: "css.paragraph_2-6",
        },
        id: 2,
      },
      article_3: {
        title: "css.article_3-title",
        haveButton: false,
        description: {
          paragraph_1: "css.paragraph_3",
          paragraph_2: "css.paragraph_3-2",
        },
        id: 3,
      },
    },
    htmlPageTxt: {
      article_1: {
        title: "html.article_1-title",
        haveButton: false,
        description: {
          paragraph_1: "html.paragraph_1",
          paragraph_2: "html.paragraph_1-2",
          paragraph_3: "html.paragraph_1-3",
          paragraph_4: "html.paragraph_1-4",
          paragraph_5: "html.paragraph_1-5",
          paragraph_6: "html.paragraph_1-6",
        },
        id: 1,
      },
      article_2: {
        title: "html.article_2-title",
        haveButton: false,
        description: {
          paragraph_1: "html.paragraph_2",
        },
        id: 2,
      },
      article_3: {
        title: "html.article_3-title",
        haveButton: false,
        description: {
          paragraph_1: "html.paragraph_3",
        },
        id: 3,
      },
      article_4: {
        title: "html.article_4-title",
        haveButton: false,
        description: {
          paragraph_1: "html.paragraph_4",
        },
        id: 4,
      },
      article_5: {
        title: "html.article_5-title",
        haveButton: false,
        description: {
          paragraph_1: "html.paragraph_5",
        },
        id: 5,
      },
    },
    jsPageTxt: {
      article_1: {
        title: "js.article_1-title",
        haveButton: false,
        description: {
          paragraph_1: "js.paragraph_1",
        },
        id: 1,
      },
      article_2: {
        title: "js.article_2-title",
        haveButton: false,
        description: {
          paragraph_1: "js.paragraph_2",
          paragraph_2: "js.paragraph_2-2",
          paragraph_3: "js.paragraph_2-3",
        },
        id: 2,
      },
      article_3: {
        title: "js.article_3-title",
        haveButton: false,
        description: {
          paragraph_1: "js.paragraph_3",
          paragraph_2: "js.paragraph_3-2",
          paragraph_3: "js.paragraph_3-3",
          paragraph_4: "js.paragraph_3-4",
        },
        id: 3,
      },
      article_4: {
        title: "js.article_4-title",
        haveButton: false,
        description: {
          paragraph_1: "js.paragraph_4",
        },
        id: 4,
      },
      article_5: {
        title: "js.article_5-title",
        haveButton: false,
        description: {
          paragraph_1: "js.paragraph_5",
        },
        id: 5,
      },
      article_6: {
        title: "js.article_6-title",
        haveButton: false,
        description: {
          paragraph_1: "js.paragraph_6",
        },
        id: 6,
      },
      article_7: {
        title: "js.article_7-title",
        haveButton: false,
        description: {
          paragraph_1: "js.paragraph_7",
          paragraph_2: "js.paragraph_7-2",
          paragraph_3: "js.paragraph_7-3",
          paragraph_4: "js.paragraph_7-4",
          paragraph_5: "js.paragraph_7-5",
          paragraph_6: "js.paragraph_7-6",
        },
        id: 7,
      },
    },
  }),
  getters: {},
  actions: {
    switchColorTheme() {
      this.lightTheme = !this.lightTheme;
      if (this.lightTheme === true) {
        document.body.classList.add("bg__white");
        document.body.classList.remove("bg__black");
      } else {
        document.body.classList.add("bg__black");
        document.body.classList.remove("bg__white");
      }
    },
  },
});
