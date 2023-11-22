<template>
  <div class="relative px-6 md:px-0">
    <!-- Global Cover -->
    <div class="global-cover" style="background-image:url('/images/forest.jpeg')"></div>

    <section class="details py-6 md:py-12">
      <div class="max-w-3xl mx-auto space-y-3 border-b pb-6">
        <h1 class="text-[3em] font-bold" v-if="blog.hind_title">{{ blog.hind_title }}</h1>
        <h1 class="text-[3em] font-bold" v-else>{{ blog.title }}</h1>
        <p class="text-xl leading-loose">{{ blog.meta_seo }}</p>
        <button class="bg-yellow-400/25 border border-yellow-600 px-5 text-yellow-700 text-sm py-2 rounded-full">{{ blog.categories.title }}</button>
      </div>
      <div class="flex items-center justify-between max-w-3xl mx-auto pt-6">
        <div>
          {{ $dayjs(blog.created_at).format('MMMM D, YYYY') }} 
          <!-- . 4 min read -->
        </div>
        <div class="flex items-center gap-4">
          <a :href="fbUrl" target="_blank"><Icon name="ri:facebook-fill" /></a>
          <a :href="twitterUrl" target="_blank"><Icon name="mdi:twitter" /></a>
          <a :href="linkedinUrl" target="_blank"><Icon name="ri:linkedin-fill" /></a>
        </div>
      </div>

    </section>

    <section class="featured-image">
      <figure class="max-w-7xl mx-auto">
        <img :src="blogUrl+blog.featured_image" :alt="blog.title" class="md:h-[70vh] w-full object-cover rounded-2xl shadow-xl border-2">
      </figure>
    </section>

    <section class="article-content py-20 leading-loose">
      <div 
        class="max-w-5xl mx-auto" 
        v-html="blog.content"
        :style="`font-size: ${fontSize}`"
      ></div>
    </section>

    <!-- font-size-controller -->
    <UPopover :popper="{ placement: 'top-end' }" class="fixed right-8 bottom-24">
      <button class="w-10 h-10 rounded-lg shadow bg-zinc-800 text-white flex items-center justify-center">
        <Icon name="streamline:interface-text-formatting-font-size-size-text-formatting-font-format" />
      </button>
      <template #panel>
        <div class="p-4 flex items-end gap-2">
          <button class="bg-zinc-800 rounded text-white w-6 h-6" @click="fontSize = '1.1em'">A</button>
          <button class="bg-zinc-800 rounded text-white w-8 h-8" @click="fontSize = '1.5em'">A</button>
          <button class="bg-zinc-800 rounded text-white w-10 h-10" @click="fontSize = '2em'">A</button>
        </div>
      </template>
    </UPopover>

  </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'light'
  })

  const route = useRoute();
  const supabase = useSupabaseClient();

  const blogUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/blogs/featured/')
  const publicUrl = ref('http://localhost:3000/pod/')
  const fontSize = ref('1.1em') 

  let { data: blog, error } = await supabase
    .from('blogs')
    .select(`
      *,
      categories(
        id, title
      )
    `)
    .eq('slug', route.params.slug)
    .single()

    useHead({
      meta: [
        { property: 'og:title', content: blog.title },
        { property: 'og:description', content: blog.meta_seo },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: publicUrl.value+blog.slug },
        { property: 'og:locale', content: 'en_IN' },
        { property: 'og:image', content: blogUrl.value+blog.featured_image }
      ]
    })

    // Social Sharing
    const link = ref('')
    const msg = ref('')
    const fbUrl = ref(`https://www.facebook.com/share.php?u=${publicUrl.value+blog.slug}`);
    const twitterUrl = ref(`https://twitter.com/share?&url=${publicUrl.value+blog.slug}&text=${blog.meta_seo}&hashtags=social&culture,news,blogs`);
    const linkedinUrl = ref(`https://www.linkedin.com/sharing/share-offsite/?url=${publicUrl.value+blog.slug}`);

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

