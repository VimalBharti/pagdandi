<template>
  <div>
    <!-- Hero Area -->
    <div class="header h-screen relative">
      <!-- <nav class="w-full absolute top-0 left-0 z-10 p-3">
        <div class="max-w-5xl mx-auto bg-white/75 shadow-lg backdrop-blur rounded-full p-2 flex justify-between items-center">
          <img src="/images/logo.jpeg" alt="rufa-logo" class="w-12 rounded-full">
          <div class="flex items-center gap-3 px-5 text-sm">
            <NuxtLink to="/">Blog</NuxtLink>
            <NuxtLink to="/">Video</NuxtLink>
          </div>
        </div>
      </nav> -->
      <div class="hero-area h-full relative overflow-hidden">
        <img src="/images/nature.jpeg" alt="nature-background-midjourney" class="h-screen w-full object-cover">
        <img src="/images/shape.png" alt="paper-shape" class="absolute -bottom-[7em] left-0 right-0 h-44 w-full -rotate-1">
        <img src="/images/rushu.png" alt="rushika" class="absolute right-0 -bottom-2 h-[50vh] transform -scale-x-100">
        <!-- <h2 class="absolute top-20 text-[10em] font-bold text-center w-full font-kablammo">RUFA</h2> -->
        <div class="absolute top-20 left-0 w-full h-full flex items-start justify-center">
          <figure class="bg-white/50 backdrop-blur-sm rounded-full overflow-hidden flex items-center justify-center md:w-[400px] md:h-[400px] p-12 border shadow-xl">
            <img src="/images/logo.png" alt="rushika" class="md:w-[300px] md:h-[300px] w-[240px] h-[240px] object-contain">
          </figure>
        </div>
      </div>
    </div>  

     <!-- Categories -->
     <section class="py-10 px-4 md:px-0 mt-10">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="space-y-3" v-for="category in categories" :key="category.id">
            <img :src="categoryUrl+category.image" alt="" class="w-full object-cover h-[30vh] rounded-2xl shadow-xl border-2 border-gray-100">
            <div class="w-full rounded-2xl bg-white shadow-inner text-center p-3 border-2 border-gray-100 font-caveat text-xl">{{ category.title }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ALl Blogs -->
    <section class="h-full w-full py-10 px-4 md:px-0">
      <div class="max-w-6xl mx-auto">
        <h3 class="section-label font-caveat font-bold text-3xl text-yellow-500">Blog & News</h3>
        <h2 class="text-4xl font-bold font-edu">From the Blog</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <template v-for="blog in blogs" :key="blog.id">
            <BlogCard :blog="blog" :blogUrl="blogUrl" />
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'light'
  })
  useHead({
    title: 'RuFa - Welcome to RuFa',
    meta: [
      { name: 'description', content: 'rufa - nature, health culture, history, literature blogs and podcasts' }
    ]
  })

  const supabase = useSupabaseClient();
  const categoryUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/category/')
  const blogUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/blogs/featured/')

  let { data: categories, error } = await supabase
    .from('categories')
    .select('*')

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

<style scoped>

</style>

