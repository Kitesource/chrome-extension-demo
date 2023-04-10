<template>
  <div class="flex h-40 py-4 text-xs border rounded-md border-neutral-200 drop-shadow bg-neutral-50">
    <div class="w-1/4 wrap-item">
      <img
        class="block"
        src="@/assets/Chrome-Logo.png"
        alt="Yisense"
      >
      <a
        href="https://www.4kmiles.com/console/login"
        target="_blank"
        class="text-brand-600 hover:underline"
      >
        <el-icon><Launch /></el-icon>
        Accessing 4K Miles website
      </a>
    </div>
    <div class="w-1/2 wrap-item">
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
        <el-button
          round
          :disabled="state.loading"
          @click="getAnalysiaData"
        >
          Reviews analysis via chatgpt
        </el-button>
      </div>
    </div>
    <div class="w-1/4 px-4">
      <div class="font-bold">
        更多工具
      </div>
      <el-button
        round
      >
        敬请期待
      </el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ElMessage } from 'element-plus'
import { Launch, Download } from '@yimian-ui/icons'
import urls from '@/api'
import { sendFetchMessage } from '../util'

interface State {
  loading: boolean
  analysiaRes: any,
  componentKey: string
}

const props = withDefaults(defineProps<{modelValue: State}>(), {})
const emits = defineEmits(['update:modelValue'])

const state = ref() as Ref<State>
watch(() => props.modelValue, (val) => {
  state.value = val
}, { deep: true, immediate: true })

watch(() => state.value, (val) => {
  emits('update:modelValue', val)
}, { deep: true })

function handleClick() {
  ElMessage.success('click me')
}

const isDelay = ref(false)
async function getAnalysiaData() {
  state.value.loading = true
  try {
    const data = {
      reviews: [
        'Really good',
        `I love this thing, it’s my 2nd one and I still use my first one has my work charger and it does amazing job,
        super fast charge too! It does get dirty in the factory I work in but it’s great! 
        Only complaint I have it the brick does get hot but I don’t know if the plug I use or what`,
        'Well made.',
        'Works great. I like the extra long cord.',
        `since late 2011, when I first hear about Anker I've been choosing this brand. Really nice products, 
        tough, reliable and cost effective. I already got Power Banks, several iphone cables, ear pods, 
        portable bluetooth speakers and chargers. All of them working very well until nowadays.`,
      ],
    }
    const res = await sendFetchMessage('fetch-post', urls.analysis, 'post', data)
    if (res.data.isDelay) {
      isDelay.value = res.data.isDelay
      ElMessage.warning('Request timed out, please try again')
      return
    }
    state.value.analysiaRes = res.data
  } catch (error) {
    console.error(error)
  }
  state.value.loading = false
}
</script>

<style scoped lang="scss">
:deep(.wrap-item) {
  @apply px-4 border-r border-dashed border-neutral-200;
  .el-button {
    @apply px-6 py-0 text-xs;
  }
}
</style>
