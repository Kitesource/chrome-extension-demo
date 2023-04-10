<template>
  <div class="flex flex-col items-center justify-center h-40 gap-2 mt-4 bg-skyblue-50 drop-shadow-md">
    <span>The estimated analysis time is less than 1 minute. Please wait.</span>
    <el-progress
      class="w-1/3"
      :percentage="50"
      :show-text="false"
      indeterminate
      :duration="2"
    />
  </div>
</template>

<script lang='ts' setup>

</script>
