<template>
  <div class="wrapper-main">
    <greeting title="road" description="slogan" />
    <elements :title="$t('technologies.dev-dir')" :elements="arrayGuides[0]" />
    <elements
      :title="'technologies.technologies'"
      :elements="arrayGuides[1]"
      position="right"
    />
    <elements :title="$t('articles')" :elements="arrayArticles" one_column />
  </div>
</template>

<script setup>
import greeting from "@/components/molecules/greeting.vue";
import elements from "@/components/molecules/elements.vue";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });

import { useStore } from "@/store/store";
const store = useStore();

const arrayGuides = store.mainGuidesTxt;
const arrayArticles = store.mainArticleTxt;
</script>

<style lang="sass" scoped></style>
