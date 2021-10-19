<template>
  <div class="p-4 sm:p-0">
    <div class="max-w-2xl mx-auto py-8 text-4xl font-bold">
      {{ printTitle }}
    </div>
    <img class="w-full" :src="printImage" alt="" />
    <div class="prose prose-sm mx-auto max-w-3xl w-full">
      <nuxt-content :document="printContent" />
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  useContext,
  useRoute,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $strapi } = useContext()
    const route = useRoute()
    const params = computed(() => route.value.params.slug)
    const data = ref()

    const printTitle = computed(() => data.value && data.value.title)
    const printImage = computed(
      () => data.value && 'http://localhost:1337' + data.value.image.url
    )
    const printContent = computed(() => data.value && data.value.content)

    async function getData() {
      try {
        data.value = await $strapi.find(`articles/${params.value}`)
        console.log('data', data.value)
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(() => {
      getData()
    })

    return {
      params,
      data,
      printTitle,
      printImage,
      printContent,
    }
  },
})
</script>
