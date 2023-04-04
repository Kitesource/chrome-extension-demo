<template>
  <div class="container">
    <el-button
      class="button"
      type="primary"
      @click="handleClick"
    >
      Click me
    </el-button>
  </div>
</template>
<script lang="ts" setup>
function handleClick() {
  alert('This is a fun Chrome extension.')
}
</script>
<style scoped lang="scss">
.button {
  position: fixed;
  top: 50%;
  margin-top: -40px;
  left: 0;
  cursor: pointer;
  z-index: 1000;
}
</style>
