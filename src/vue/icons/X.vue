<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M18 6 6 18M6 6l12 12"/>
  </svg>
</template>

<script setup lang="ts">
interface XProps {
  size?: string | number;
}

withDefaults(defineProps<XProps>(), {
  size: 24,
});
</script>
