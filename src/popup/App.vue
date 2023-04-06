<template>
  <div class="container">
    <button
      ref="changeColorBtn"
      @click="handleClick"
    />
  </div>
</template>

<script setup lang="ts">

const changeColorBtn = ref<HTMLButtonElement>()

onMounted(() => {
  chrome.storage.sync.get('color', ({ color }) => {
    changeColorBtn.value!.style.backgroundColor = color
  })
})

async function handleClick() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id as number },
    // 此函数的主体将作为内容脚本执行
    // 当前页面
    func: () => {
      chrome.storage.sync.get('color', ({ color }) => {
        document.body.style.backgroundColor = color
      })
    },
  })
}

</script>

<style lang="scss" scoped>
.container {
  button {
    height: 30px;
    width: 30px;
    outline: none;
    margin: 10px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  button.current {
    box-shadow: 0 0 0 2px white,
                0 0 0 4px black;
  }
}
</style>
