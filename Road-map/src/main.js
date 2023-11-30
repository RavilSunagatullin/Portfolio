import { createApp } from "vue";
import "./style.sass";
import App from "./App.vue";

import { createI18n, useI18n } from "vue-i18n";
import { languages, defaultLocal } from "./i18n";
const messages = Object.assign(languages);
const localeStorageLang = localStorage.getItem("lang");

const i18n = createI18n({
  legacy: false,
  locale: localeStorageLang || defaultLocal,
  fallbackLocale: "en",
  messages,
});

import { createPinia } from "pinia";
const pinia = createPinia();

import router from "./router/router.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSun,
  faPaperPlane,
  faCheck,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

library.add([faSun, faPaperPlane, faCheck, faHeart]);

createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
})
  .use(i18n)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
