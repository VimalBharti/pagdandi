<template>
  <section class="h-full w-full py-10 px-4 md:px-0">
    <div class="max-w-6xl mx-auto">
      <h3 class="section-label font-caveat font-bold text-3xl text-lime-500">Blog & News</h3>
      <h2 class="text-4xl font-bold font-edu">From the Blog</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <template v-for="blog in blogs" :key="blog.id">
          <BlogCard :blog="blog" :blogUrl="blogUrl" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
  definePageMeta({
    colorMode: 'light'
  })

  useHead({
    title: 'RuFa - all articles',
    meta: [
      { name: 'description', content: 'rufa - nature, health culture, history, literature blogs and podcasts' }
    ]
  })

  const supabase = useSupabaseClient();
  const categoryUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/category/')
  const blogUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/blogs/featured/')

  let { data: blogs } = await supabase
    .from('blogs')
    .select(`
      *,
      categories(
        id, title
      )
    `)
    .range(0, 3)
    .order('created_at')
</script>

<style>

</style>

