<template>
  <footer
    :class="[
      'footer',
      { footer__white: store.lightTheme === false },
      { footer__black: store.lightTheme === true },
    ]"
  >
    <div class="footer__right">
      <a href="https://github.com/RavilSunagatullin/Road.map">
        <uiButton label="GitHub" class="github" />
      </a>
      <a href="https://vk.com/id497468593">
        <uiButton :label="$t('author')" class="github" />
      </a>
      <uiLink :label="$t('about')" to="/about" />
    </div>
    <div class="footer__center">
      <uiSwitch
        v-if="isMobile"
        name="Switch-color"
        id="Switch-color"
        value="Switch-color"
        icon="sun"
        v-model:checked="switchColor"
      />
      <uiSwitch
        v-if="isMobile"
        name="Switch-lang"
        id="Switch-lang"
        value="Switch-lang"
        label="En"
        v-model:checked="switchLang"
      />
    </div>
    <div class="footer__left">
      <uiInput
        :label="$t('Just_input')"
        :placeholder="$t('Just_input')"
        name="Just input"
      />
    </div>
  </footer>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });

import { ref, watch } from "vue";
import uiSwitch from "@/components/atoms/uiSwitch.vue";
import uiLink from "@/components/atoms/uiLink.vue";
import uiButton from "@/components/atoms/uiButton.vue";
import uiInput from "@/components/atoms/uiInput.vue";

const switchColor = ref(true);
const switchLang = ref();

if (locale.value === "en") {
  switchLang.value = ref(false);
}

watch(switchColor, () => {
  switchColor: {
    store.switchColorTheme();
  }
});

watch(switchLang, () => {
  switchLang: {
    if (locale.value === "en") {
      locale.value = "ru";
    } else {
      locale.value = "en";
    }
    localStorage.setItem("lang", locale.value);
  }
});

const isMobile = ref(false);

if (window.innerWidth < 700) {
  isMobile.value = true;
} else {
  isMobile.value = false;
}
</script>

<style lang="sass" scoped>
.github
  padding: 13px 20px
  height: 100%
  @media (max-width:400px)
    font-size: 13px
.footer
    display: flex
    width: 100%
    justify-content: space-between
    padding-top: 25px
    padding-bottom: 10px
    gap: 5px
    align-items: center
    &__black
        border-top: 1px solid #333
    &__white
        border-top: 1px solid #fff
    &__right
        display: flex
        gap: 10px
    &__center
        display: flex
        gap: 10px
    &__left
      margin-top: -30px

@media (max-width:800px)
  .footer
    flex-direction: column
    gap: 25px
    align-items: center
</style>
