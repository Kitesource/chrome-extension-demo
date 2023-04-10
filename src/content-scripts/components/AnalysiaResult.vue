<template>
  <div
    v-if="Object.keys(result).length"
    class="grid grid-cols-3 gap-4 p-4 mt-4 shadow-md bg-skyblue-50"
  >
    <div
      v-for="(val, key) in result"
      :key="key"
      class="p-2 bg-white"
    >
      <h5>{{ key }}</h5>
      <div class="break-words">
        {{ val }}
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>

withDefaults(defineProps<{result: any}>(), {})

</script>
