<template>
  <div class="not">
    <h1>In develop</h1>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
</script>

<style lang="sass" scoped>
.not
    margin-top: 50px
    font-size: 48px
</style>
