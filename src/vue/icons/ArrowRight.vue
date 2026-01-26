<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
</template>

<script setup lang="ts">
interface ArrowRightProps {
  size?: string | number;
}

withDefaults(defineProps<ArrowRightProps>(), {
  size: 24,
});
</script>
