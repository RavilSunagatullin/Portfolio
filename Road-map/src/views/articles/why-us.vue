<template>
  <articleTempl
    greetingTitle="articles-titles.about"
    greetingHelper="article-why-us.title-helper"
    strikeTitle="article-why-us.title"
    :paragraphArray="arrayEl"
  />
</template>

<script setup>
import articleTempl from "@/components/Organisms/article-templ.vue";
import { useStore } from "@/store/store";
const store = useStore();

const arrayEl = store.whyUsTxt;
</script>

<style lang="sass" scoped></style>
