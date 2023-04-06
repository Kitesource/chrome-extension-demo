<template>
  <div class="p-4">
    <div class="flex h-40 text-xs border rounded-md border-neutral-200 drop-shadow bg-neutral-50">
      <div class="w-[2/9] wrap-item">
        <div class="flex items-center">
          <img
            class="inline-block w-[53px] h-[30px]"
            src="@/assets/Chrome-Logo.png"
            alt="YIMIAN"
          >
          <span class="font-bold">ChatGPT 亚马逊工具</span>
        </div>
        <div>
          更多体验，请访问
          <a
            href="http://yimian.com.cn"
            target="_blank"
          >Yimian</a>
        </div>
      </div>
      <div class="w-1/3 wrap-item">
        <div>
          <span class="font-bold">B01HEGUPD</span>
          <el-button
            type="primary"
            link
            :icon="CopyDocument"
            @click="handleClick"
          />
        </div>
      </div>
      <div class="w-1/3 wrap-item">
        <div>
          <span class="font-bold">Reviews, 23,888</span>
          <el-button
            type="primary"
            link
            :icon="Download"
            @click="handleClick"
          />
        </div>
        <div class="flex flex-wrap gap-2">
          <el-button round>
            评论分享 ChatGPT
          </el-button>
          <el-button round>
            Listing优化 ChatGPT
          </el-button>
          <el-button round>
            QA分析 ChatGPT
          </el-button>
        </div>
      </div>
      <div class="w-[1/9] px-4">
        <div class="font-bold">
          更多工具
        </div>
        <el-button
          round
          @click="handleClick"
        >
          敬请期待
        </el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { CopyDocument, Download } from '@element-plus/icons-vue'

function handleClick() {
  ElMessage.success('click me')
}
</script>
<style scoped lang="scss">
:deep(.wrap-item) {
  @apply px-4 border-r border-dashed border-neutral-200;
  .el-button {
    @apply px-6 text-xs;
  }
}

</style>
