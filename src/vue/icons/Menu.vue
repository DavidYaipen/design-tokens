<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M3 12h18M3 6h18M3 18h18"/>
  </svg>
</template>

<script setup lang="ts">
interface MenuProps {
  size?: string | number;
}

withDefaults(defineProps<MenuProps>(), {
  size: 24,
});
</script>
