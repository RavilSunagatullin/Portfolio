<template>
  <div class="wrapper-main">
    <greeting
      title="greetings.article-greeting"
      description="greetings.article-greeting-helper"
    />
    <elements
      :title="$t('articles')"
      :elements="arrayEl"
      one_column
      position="right"
    />
  </div>
</template>

<script setup>
import elements from "@/components/molecules/elements.vue";
import greeting from "@/components/molecules/greeting.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

import { useStore } from "@/store/store";
const store = useStore();

const arrayEl = store.mainArticleTxt;
</script>

<style lang="sass" scoped></style>
