<template>
  <div class="form-input">
    <input
      :class="[
        { 'input-text': store.lightTheme === true },
        { 'input-dark-text': store.lightTheme === false },
      ]"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :id="name"
      :value="value"
      @input="updateValue"
    />
    <label
      :for="name"
      :class="[
        { 'input-label': store.lightTheme === true },
        { 'input-dark-label': store.lightTheme === false },
      ]"
      >{{ label }}</label
    >
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();
const emit = defineEmits(["update:value"]);
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
const updateValue = (e) => {
  emit("update:value", e.target.value);
};
</script>

<style lang="sass" scoped>
.form
    &-input
        margin-top: 30px
        position: relative
        max-width: 300px

.input
    &-text
        border: 1px solid #333333 // <==
        padding: 0 10px
        height: 40px
        border-radius: 7px
        font-size: 15px
        width: 100%
        position: relative
        z-index: 1
        background-color: #333 //<==
        &:focus
            & + .input-label
                z-index: 1
                opacity: 1
                top: -20px
        &:not(:placeholder-shown)
            & + .input-label
                z-index: 1
                opacity: 1
                top: -20px
    &-label
        font-weight: bold
        display: block
        position: absolute
        top: 20px
        opacity: 0
        z-index: -1
        transition: .3s
        font-size: 13px
        color: #333333 //<==

.input-dark
    &-text
        border: 1px solid #fff
        padding: 0 10px
        height: 40px
        border-radius: 7px
        font-size: 15px
        width: 100%
        position: relative
        z-index: 1
        background-color: #ff
        &:focus
            & + .input-dark-label
                z-index: 1
                opacity: 1
                top: -20px
        &:not(:placeholder-shown)
            & + .input-label
                z-index: 1
                opacity: 1
                top: -20px
    &-label
        font-weight: bold
        display: block
        position: absolute
        top: 20px
        opacity: 0
        z-index: -1
        transition: .3s
        font-size: 13px
        color: #fff
</style>
