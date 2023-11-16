<template>
  <div class="global-cover" style="background-image:url('/images/podcast.jpeg')"></div>
  <section class="h-full w-full py-10 px-4 md:px-0">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <template v-for="blog in blogs" :key="blog.id">
          <PodcastCard :blog="blog" :blogUrl="blogUrl" />
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
    title: 'RuFa - podcasts',
    meta: [
      { name: 'description', content: 'rufa - now listen article in shorts' }
    ]
  })

  const supabase = useSupabaseClient();
  const categoryUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/category/')
  const blogUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/blogs/featured/')

  let { data: blogs } = await supabase
    .from('blogs')
    .select(`
      *
    `)
    .range(0, 3)
    .order('created_at')
</script>

<style scoped>
.global-cover {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    height: 60vh;
    background: no-repeat center center/cover;
    -webkit-mask-image: linear-gradient(to top,transparent,rgba(0,0,0,.013) 8.1%,rgba(0,0,0,.049) 15.5%,rgba(0,0,0,.104) 22.5%,rgba(0,0,0,.175) 29%,rgba(0,0,0,.259) 35.3%,rgba(0,0,0,.352) 41.2%,rgba(0,0,0,.45) 47.1%,rgba(0,0,0,.55) 52.9%,rgba(0,0,0,.648) 58.8%,rgba(0,0,0,.741) 64.7%,rgba(0,0,0,.825) 71%,rgba(0,0,0,.896) 77.5%,rgba(0,0,0,.951) 84.5%,rgba(0,0,0,.987) 91.9%,#000);
    mask-image: linear-gradient(to top,transparent,rgba(0,0,0,.013) 8.1%,rgba(0,0,0,.049) 15.5%,rgba(0,0,0,.104) 22.5%,rgba(0,0,0,.175) 29%,rgba(0,0,0,.259) 35.3%,rgba(0,0,0,.352) 41.2%,rgba(0,0,0,.45) 47.1%,rgba(0,0,0,.55) 52.9%,rgba(0,0,0,.648) 58.8%,rgba(0,0,0,.741) 64.7%,rgba(0,0,0,.825) 71%,rgba(0,0,0,.896) 77.5%,rgba(0,0,0,.951) 84.5%,rgba(0,0,0,.987) 91.9%,#000);
    opacity: 0.2;
}
</style>

