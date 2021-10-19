<template>
  <div class="bg-[#FEF9EF] w-full min-h-screen">
    <TheHeading class="mb-10" />
    <div
      v-for="item in blog"
      :key="item"
      class="mb-16 max-w-3xl p-3 sm:p-0 mx-auto cursor-pointer"
    >
      <div
        class="
          prose prose-sm
          w-full
          border-l-4 border-main-yellow
          pl-5
          hover:translate-x-2
          transition
          duration-150
          no-underline
        "
      >
        <nuxt-link :to="'/blog/' + item.slug" class="no-underline">
          <h1
            class="font-semibold mb-0 no-underline"
            style="margin-bottom: 5px"
          >
            {{ item.title }}
          </h1>
          <div class="no-underline">
            {{ item.description }}
          </div>
          <div class="text-xs no-underline mt-1 text-gray-400">
            {{ item.created_at }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  useAsync,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $content, $strapi } = useContext()
    const blog = ref([])
    const content = useAsync(async () => await $content('blog').fetch())

    onMounted(async () => {
      const data = await $strapi.find('articles')
      blog.value = data

      console.log('data', blog.value)
    })

    return {
      content,
      blog,
    }
  },
})
</script>
