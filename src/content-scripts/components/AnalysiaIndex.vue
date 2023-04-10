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
          :loading="downloading"
          @click="() => handleDownload()"
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
import qs from 'qs'
import urls from '@/api'
import { sendFetchMessage } from '../util'

interface State {
  loading: boolean
  analysiaRes: any,
  componentKey: string
}

const props = withDefaults(defineProps<{modelValue: State}>(), {})
const emits = defineEmits(['update:modelValue'])

const state = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val),
})

const downloading = ref(false)
async function handleDownload(pageNumber:number = 1, pageSize:number = 10, sortBy:string = 'recent') {
  downloading.value = true
  const { href } = window.location
  const match = href.match(/(?<=dp\/)[A-Z0-9]+(?=[\/\?]ref)/)
  const productId = match ? match[0] : ''
  const reviews_url = urls.reviews.replace('<pageNum>', String(pageNumber))
  const data = {
    scope: 'reviewsAjax1',
    reviewerType: 'all_reviews',
    mediaType: 'all_contents',
    pageSize: `${pageSize}`,
    asin: productId,
    pageNumber: `${pageNumber}`,
    sortBy,
  }

  try {
    const res = await sendFetchMessage('fetch', reviews_url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify(data),
    })
    console.log('res', res)
  } catch (error:any) {
    error?.msg && ElMessage.warning(error.msg)
    console.error(error)
  }
  downloading.value = false
}

async function getAnalysiaData() {
  state.value.loading = true
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
  try {
    const res = await sendFetchMessage('fetch', urls.analysis, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    state.value.analysiaRes = res.data
  } catch (error:any) {
    error?.msg && ElMessage.warning(error.msg)
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
