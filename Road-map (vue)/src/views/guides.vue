<template>
  <div class="wrapper-main">
    <greeting
      title="greetings.guides-greeting"
      description="greetings.guides-greeting-helper"
    />
    <elements
      :title="$t('technologies.dev-dir')"
      :elements="arrayEl[0]"
      position="right"
    />
    <elements :title="$t('technologies.technologies')" :elements="arrayEl[1]" />
  </div>
</template>

<script setup>
import elements from "@/components/molecules/elements.vue";
import greeting from "@/components/molecules/greeting.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

import { useStore } from "@/store/store";
const store = useStore();

const arrayEl = store.mainGuidesTxt;
</script>

<style lang="sass" scoped></style>
