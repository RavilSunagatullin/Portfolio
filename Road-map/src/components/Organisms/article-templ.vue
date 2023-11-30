<template>
  <div class="wrapper-main">
    <greeting :title="greetingTitle" :description="greetingHelper" />
    <div class="article">
      <titleStrike :title="$t(`${strikeTitle}`)" />
      <div
        :class="[
          'article-content',
          { 'article-content-dark': store.lightTheme === false },
        ]"
      >
        <p v-for="el of paragraphArray">{{ $t(`${el}`) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import greeting from "@/components/molecules/greeting.vue";
import titleStrike from "@/components/atoms/titleStrike.vue";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });

import { useStore } from "@/store/store";
const store = useStore();

const props = defineProps({
  greetingTitle: {
    type: String,
    required: true,
  },
  greetingHelper: {
    type: String,
    required: false,
  },
  strikeTitle: {
    type: String,
    required: true,
  },
  paragraphArray: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
.article
    display: flex
    flex-direction: column
    gap: 25px
    &-content
        font-size: 16px
        line-height: 165%
        display: flex
        flex-direction: column
        gap: 15px
        max-width: 1000px
        width: 100%
        margin: auto
        padding: 15px
        text-indent: 20px
        border: 1px solid #333
        background-color: #fff
        color: #333
        border-radius: 8px
        text-align: justify
        &-dark
            border: 1px solid #fff
            background-color: #333
            color: #fff
</style>
