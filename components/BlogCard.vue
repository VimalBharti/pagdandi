<template>
  <div class="w-full bg-white rounded-xl shadow overflow-hidden">
    <NuxtLink :to="`/pod/${blog.slug}`">
      <figure class="w-full h-[50vh] object-cover rounded-xl overflow-hidden cursor-pointer relative">
        <img :src="blogUrl+blog.featured_image" alt="" class="w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out hover:grayscale">
        <div class="tag absolute top-3 left-3 bg-zinc-800 px-4 py-1.5 rounded-lg z-10">
          <span class="font-caveat text-yellow-400 text-xl">{{ blog.categories.title }}</span>
        </div>
      </figure>
    </NuxtLink>
    <div class="card-text p-8">
      <div class="text-gray-500 mb-2 font-caveat text-xl">{{ $dayjs( blog.created_at).format('D MMM YYYY') }}</div>
      <h2 class="text-xl font-semibold font-cairo">{{ blog.title }}</h2>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    blog: Object,
    blogUrl: String
  })
</script>

<style>

</style>

