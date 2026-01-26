<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m6 9 6 6 6-6"/>
  </svg>
</template>

<script setup lang="ts">
interface ChevronDownProps {
  size?: string | number;
}

withDefaults(defineProps<ChevronDownProps>(), {
  size: 24,
});
</script>
