<template>
  <div class="container">
    <div class="wrapper">
      <uiHeader />
      <div class="content">
        <transition>
          <router-view></router-view>
        </transition>
      </div>
      <div class="footer">
        <uiFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();
import uiHeader from "@/components/molecules/uiHeader.vue";
import uiFooter from "@/components/molecules/uiFooter.vue";
</script>

<style lang="sass">

.v-enter-active,.v-leave-active
  transition: opacity 0.15s ease-in-out
.v-enter-from, .v-leave-to
  opacity: 0
</style>
