<template>
  <div>
    Choose a different background color!
  </div>
  <div ref="page" />
</template>

<script setup lang="ts">

const page = ref<HTMLElement>()

const selectedClassName = 'current'
const presetButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']

// 通过标记所选按钮并保存对按钮单击做出反应
// 选择
function handleButtonClick(event:any) {
  // 从先前选择的颜色中删除样式
  const current = event.target.parentElement.querySelector(
    `.${selectedClassName}`,
  )
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName)
  }

  // 将按钮标记为选中
  const { color } = event.target.dataset
  event.target.classList.add(selectedClassName)
  chrome.storage.sync.set({ color })
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'https://www.google.com/favicon.ico',
    title: 'Set Color',
    message: 'Set successfully',
    priority: 0,
  })
}

// 为每种提供的颜色向页面添加一个按钮
function constructOptions(buttonColors: any[]) {
  chrome.storage.sync.get('color', (data) => {
    const currentColor = data.color
    // 对于我们提供的每种颜色......
    buttonColors.forEach((buttonColor) => {
      // ...创建一个具有该颜色的按钮...
      const button = document.createElement('button')
      button.dataset.color = buttonColor
      button.style.width = '100px'
      button.style.height = '40px'
      button.style.backgroundColor = buttonColor

      // …标记当前选择的颜色…
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName)
      }

      // ..并为单击该按钮时注册一个侦听器
      button.addEventListener('click', handleButtonClick)
      page.value?.appendChild(button)
    })
  })
}

onMounted(() => {
  // Initialize the page by constructing the color options
  constructOptions(presetButtonColors)
})

</script>
