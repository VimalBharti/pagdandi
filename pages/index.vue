<template>
  <div>
    <!-- Hero Area -->
    <div class="header h-screen relative">
      <nav class="w-full fixed top-0 left-0 z-10 p-3">
        <div class="max-w-xl w-full mx-auto bg-white/50 shadow-inner border backdrop-blur rounded-full p-2 flex justify-between items-center">
          <NuxtLink to="/" class="bg-white/75 rounded-full border border-white">
            <img src="/images/logo.png" alt="rufa-logo" class="w-12 rounded-full">
          </NuxtLink>
          <div class="flex items-center gap-3 text-sm">
            <NuxtLink to="/" class="flex items-center gap-1 bg-gray-100/50 rounded-full px-3 py-2 text-zinc-800">
              <Icon name="ic:outline-article" class="h-4 w-4" />
              <span>Articles</span>
            </NuxtLink>
            <NuxtLink to="/" class="flex items-center gap-1 bg-gray-100/50 rounded-full px-3 py-2 text-zinc-800">
              <Icon name="material-symbols:slow-motion-video-rounded" class="h-4 w-4" />
              <span>Videos</span>
            </NuxtLink>
            <NuxtLink to="/" class="flex items-center gap-1 bg-gray-100/50 rounded-full px-3 py-2 text-zinc-800">
              <Icon name="ic:outline-mail" class="h-4 w-4" />
              <span>Contact</span>
            </NuxtLink>
            <NuxtLink to="/" class="flex items-center gap-1 bg-gray-100/50 rounded-full px-3 py-2 text-zinc-800">
              <Icon name="solar:podcast-bold" class="h-5 w-5" />
              <span>Podcast</span>
            </NuxtLink>
          </div>
        </div>
      </nav>

      <div class="hero-area h-full relative overflow-hidden">
        <img src="/images/hero.jpeg" alt="nature-background-midjourney" class="h-screen w-full object-cover">
        <!-- <img src="/images/shape.png" alt="paper-shape" class="absolute -bottom-[7em] left-0 right-0 h-44 w-full -rotate-1"> -->
        <div class="absolute top-40 left-0 w-full h-full flex items-start justify-center">
          <figure class=" rounded-full overflow-hidden flex items-center justify-center md:w-[400px] md:h-[400px] shadow-xl">
            <img src="/images/logo.png" alt="rushika" class="md:w-[300px] md:h-[300px] w-[240px] h-[240px] object-contain rounded-full">
          </figure>
        </div>
      </div>
    </div>  

    <!-- ALl Videos -->
    <section class="h-full w-full py-10 px-4 md:px-0">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <figure class="w-full h-full object-cover rounded-xl overflow-hidden cursor-pointer relative">
            <iframe class="w-full h-[40vh]" src="https://www.youtube.com/embed/s-tIHHsdGT4?si=o7K6aFUcbj8k4vqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </figure>
          <figure class="w-full h-full object-cover rounded-xl overflow-hidden cursor-pointer relative">
            <iframe class="w-full h-[40vh]" src="https://www.youtube.com/embed/pZG5viPombQ?si=sZfOCL7738YIxJq-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </figure>
          <figure class="w-full h-full object-cover rounded-xl overflow-hidden cursor-pointer relative">
            <iframe class="w-full h-[40vh]" src="https://www.youtube.com/embed/6UFBxBp7rWI?si=z9hJKdKdWY9efgwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </figure>
        </div>
      </div>
    </section>

    <!-- ALl Blogs -->
    <section class="h-full w-full py-10 px-4 md:px-0">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold">Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="w-full bg-white overflow-hidden">
            <NuxtLink to="/">
              <figure class="w-full h-[30vh] object-cover rounded-xl overflow-hidden cursor-pointer relative">
                <img src="/images/11.png" alt="" class="w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out">
              </figure>
            </NuxtLink>
            <div class="">
              <div class="text-gray-500 mt-2 mb-1 font-caveat text-lg">27 Feb 2024</div>
              <span class="text-yellow-400 text-xs font-semibold">Society Culture</span>
              <h2 class="text-xl font-semibold">Sample Blog One</h2>
            </div>
          </div>
          <div class="w-full bg-white overflow-hidden">
            <NuxtLink to="/">
              <figure class="w-full h-[30vh] object-cover rounded-xl overflow-hidden cursor-pointer relative">
                <img src="/images/22.jpeg" alt="" class="w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out">
              </figure>
            </NuxtLink>
            <div class="">
              <div class="text-gray-500 mt-2 mb-1 font-caveat text-lg">27 Feb 2024</div>
              <span class="text-yellow-400 text-xs font-semibold">Society Culture</span>
              <h2 class="text-xl font-semibold">Sample Blog Two</h2>
            </div>
          </div>
          <div class="w-full bg-white overflow-hidden">
            <NuxtLink to="/">
              <figure class="w-full h-[30vh] object-cover rounded-xl overflow-hidden cursor-pointer relative">
                <img src="/images/33.jpeg" alt="" class="w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out">
              </figure>
            </NuxtLink>
            <div class="">
              <div class="text-gray-500 mt-2 mb-1 font-caveat text-lg">27 Feb 2024</div>
              <span class="text-yellow-400 text-xs font-semibold">Society Culture</span>
              <h2 class="text-xl font-semibold">Sample Blog Three</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-10 px-4 md:px-0 mt-10">
      <div class="max-w-6xl mx-auto">
        <!-- <h3 class="section-label font-caveat font-bold text-3xl text-yellow-500">Categories</h3> -->
        <h2 class="text-4xl font-bold mb-4">Categories</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="flex" v-for="category in categories" :key="category.id">
            <img :src="categoryUrl+category.image" alt="" class="w-14 object-cover h-14 rounded-l-2xl shadow-xl border-2 border-gray-100">
            <div class="w-full rounded-r-2xl bg-white shadow-inner flex items-center justify-center p-3 border-2 border-gray-100 text-sm">{{ category.title }}</div>
          </div>
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
    title: 'पगडंडी',
    meta: [
      { name: 'description', content: 'nature, health culture, history, literature blogs and podcasts' }
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

