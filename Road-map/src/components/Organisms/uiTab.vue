<template>
  <div class="tab">
    <div class="tab-nav">
      <uiButton
        v-for="el of data"
        :key="el.id"
        :active="selectedTab === el.id ? true : false"
        @click="selectedTab = el.id"
        :label="$t(`${el.title}`)"
      />
    </div>
    <div
      :class="[
        'tab-content',
        { 'tab-content-dark': store.lightTheme === false },
      ]"
    >
      <div
        v-for="el of data"
        :key="el.id"
        v-show="selectedTab === el.id"
        class="tab-inside"
      >
        <span class="title">{{ $t(`${el.title}`) }}</span>
        <span v-for="descr of el.description" class="descr">{{
          $t(`${descr}`)
        }}</span>
        <uiLink
          class="tab-link"
          v-if="el.haveButton === true"
          :label="$t(`${el.label}`)"
          :to="el.to"
          style="min-width: 100px; padding: 10px 20px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

import uiButton from "@/components/atoms/uiButton.vue";
import uiLink from "@/components/atoms/uiLink.vue";

const selectedTab = ref(1);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
.descr
  text-align: justify
.tab
    padding: 30px
    max-width: 900px
    width: 100%
    display: grid
    grid-template-columns: 200px 1fr
    gap: 30px
    &-nav
        display: flex
        flex-direction: column
        gap: 15px
        // margin: auto 0
    &-content
        height: 100%
        line-height: 160%
        padding: 15px
        border: 1px solid #333
        background-color: #fff
        color: #333
        border-radius: 8px
        margin: 0 auto
        &-dark
            border: 1px solid #fff
            background-color: #333
            color:#fff
    &-inside
        display: flex
        flex-direction: column
        gap: 15px
    &-link
        min-width: 100px
        padding: 10px 20px
        @media (max-width:500px)
          .tab-link
            height: 50px
    @media (max-width:1000px)
      grid-template-columns: 150px 1fr
    @media (max-width:600px)
      display: flex
      flex-direction: column
      gap: 15px
</style>
