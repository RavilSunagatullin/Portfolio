<template>
  <div class="div">
    <titleStrike :title="$t(`${title}`)" :position="position" />
    <div :class="['elements', { 'elements-one': one_column }]">
      <uiLink
        v-for="element in elements"
        :label="$t(`${element.title}`)"
        :to="element.to"
        textAlign="left"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

import titleStrike from "@/components/atoms/titleStrike.vue";
import uiLink from "@/components/atoms/uiLink.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  elements: {
    type: Object,
    required: true,
  },
  position: {
    type: String,
    default: "left",
  },
  one_column: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="sass" scoped>

.div
    padding: 0 20px
    display: flex
    flex-direction: column
    gap: 36px
    max-width: 1080px
    @media (max-width:600px)
        gap: 15px
.elements
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 20px
    @media (max-width:600px)
        grid-template-columns: repeat(1, 1fr)
        gap: 10px
    &-one
      grid-template-columns: repeat(1, 1fr)

.element
    padding: 12px 10px
    border-radius: 8px
    width: 100%
    transition: all 0.1s ease
    &__white
        background-color: #333
        color: white
        border: 1px solid #333

    &__black
        background-color: white
        color: #333
        border: 1px solid white
    &:hover
        background: #fd3e3e
        color: white
.link
  line-height: 160%
  width: 100%
</style>
