<template>
  <div
    v-if="position == 'left'"
    :class="[
      'title',
      { title__white: store.lightTheme === true },
      { title__black: store.lightTheme === false },
    ]"
  >
    <h1 class="strike-white" v-show="store.lightTheme === true">{{ title }}</h1>
    <h1 class="strike-black" v-show="store.lightTheme === false">
      {{ title }}
    </h1>
  </div>
  <div
    v-else
    :class="[
      'title-right',
      { 'title-right__white': store.lightTheme === true },
      { 'title-right__black': store.lightTheme === false },
    ]"
  >
    <h1 class="strike-white" v-show="store.lightTheme === true">{{ title }}</h1>
    <h1 class="strike-black" v-show="store.lightTheme === false">
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: "left",
  },
});
</script>

<style lang="sass" scoped>
.title
    margin-top: 20px
    width: 100%
    font-size: 30px
    .strike-white
        display: flex
        font-weight: 200
        gap: 15px
        align-items: center
        max-width: 1055px
        &::after
            content: ''
            width: 100%
            height: 50%
            border-bottom: 1px solid #333
    .strike-black
        display: flex
        gap: 15px
        font-weight: 200
        align-items: center
        max-width: 1055px
        &::after
            content: ''
            width: 100%
            height: 50%
            border-bottom: 1px solid white
    &__white
        color: #333
    &__black
        color: white
.title-right
    margin-top: 20px
    width: 100%
    font-size: 30px
    .strike-white
        display: flex
        font-weight: 200
        gap: 15px
        align-items: center
        max-width: 1055px
        &::before
            content: ''
            width: 100%
            height: 50%
            border-bottom: 1px solid #333
    .strike-black
        display: flex
        gap: 15px
        font-weight: 200
        align-items: center
        max-width: 1055px
        &::before
            content: ''
            width: 100%
            height: 50%
            border-bottom: 1px solid white
    &__white
        color: #333
    &__black
        color: white
</style>
