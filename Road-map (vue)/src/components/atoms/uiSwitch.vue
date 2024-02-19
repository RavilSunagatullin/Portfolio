<template>
  <div class="switch-container">
    <input
      type="checkbox"
      class="switch"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      @input="handleClick($event)"
    />

    <label :for="id">{{ label }}</label>
    <label v-if="!icon" :for="id" class="switch__label">{{ label }}</label>
    <span v-else>
      <font-awesome-icon
        :icon="`fa-solid fa-${icon}`"
        class="icon"
        size="2xl"
      />
    </span>
  </div>
</template>

<script setup>
const emits = defineEmits("update:checked");
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    required: false,
  },
});
const handleClick = (event) => {
  emits("update:checked", event.target.checked);
};
</script>

<style lang="scss" scoped>
.icon {
  margin-left: 10px;
}
.switch {
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
  z-index: -1;
  opacity: 0;
  &-container {
    display: flex;
    align-items: center;
  }
  &__label {
    margin-left: 10px;
  }
  & + label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 35px;
    background: #9f9f9f;
    border: 1px solid #333333; // <==
    display: block;
    border-radius: 100px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 5px;
      width: 26px;
      height: 26px;
      background: #ffffff;
      border: 1px solid #333333;
      border-radius: 90px;
      transition: 0.3s;
      transform: translateY(-50%);
    }
  }
  &:checked {
    & + label {
      background: #fd3e3e;
      &:after {
        background: #fff;
        left: calc(100% - 5px);
        transform: translateX(-100%) translateY(-50%);
      }
      &:active:after {
        width: 33px;
      }
    }
  }
}
</style>
