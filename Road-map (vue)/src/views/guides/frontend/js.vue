<template>
  <div class="cover">
    <uiLink class="cover-link" :label="$t('back')" to="/base-frontend" />
    <uiTab :data="data" />
  </div>
</template>

<script setup>
import uiTab from "@/components/Organisms/uiTab.vue";
import uiLink from "@/components/atoms/uiLink.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
import { useStore } from "@/store/store";
const store = useStore();

const data = store.jsPageTxt;
</script>

<style lang="sass" scoped>
.cover
  margin-top:30px
  &-link
    margin-left: 30px
</style>
