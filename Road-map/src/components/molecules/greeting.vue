<template>
  <div class="greetings">
    <h1 class="heading-1">{{ $t(`${title}`) }}</h1>
    <h3 class="heading-3">{{ $t(`${description}`) }}</h3>
    <div class="wrapper-greeting" v-show="link">
      <uiLink to="/main" :label="$t(`${button}`)" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

import uiLink from "@/components/atoms/uiLink.vue";

const props = defineProps({
  link: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  button: {
    type: String,
    required: false,
  },
});
</script>

<style lang="sass" scoped>
.wrapper--greeting
    margin-top: 30px
.greetings
    margin-top: 145px
    display: flex
    flex-direction: column
    gap: 30px
    justify-content: center
    text-align: center
.heading-1
    font-size: 40px
    font-weight: 300
    line-height: 170%
.heading-3
    font-size: 32px
    line-height: 170%
    font-weight: 300

@media (max-width:800px)
    .greetings
        margin-top: 40px
        gap: 20px
    .heading-1
      font-size: 36px
    .heading-3
      font-size: 24px

@media (max-width:400px)
    .greetings
      gap: 10px
    .heading-1
      font-size: 32px
    .heading-3
      font-size: 16px
</style>
