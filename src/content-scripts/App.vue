<template>
  <div class="p-4">
    <AnalysiaIndex v-model="state" />

    <ProgressCompoent v-if="state.loading" />
    <keep-alive v-else>
      <component
        :is="componentMap[state.componentKey]"
        :result="state.analysiaRes"
      />
    </keep-alive>
  </div>
</template>
<script lang="ts" setup>
import AnalysiaResult from './components/AnalysiaResult.vue'
import AnalysiaIndex from './components/AnalysiaIndex.vue'
import ProgressCompoent from './components/ProgressCompoent.vue'

const state = ref({
  loading: false,
  analysiaRes: {},
  componentKey: 'analysia',
})

const componentMap = computed<Record<string, unknown>>(() => ({
  analysia: markRaw(AnalysiaResult),
}))

</script>
