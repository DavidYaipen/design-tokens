<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M20 6 9 17l-5-5"/>
  </svg>
</template>

<script setup lang="ts">
interface CheckProps {
  size?: string | number;
}

withDefaults(defineProps<CheckProps>(), {
  size: 24,
});
</script>
