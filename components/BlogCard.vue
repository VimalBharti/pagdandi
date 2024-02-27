<template>
  <div class="w-full bg-white overflow-hidden">
    <NuxtLink :to="`/pod/${blog.slug}`">
      <figure class="w-full h-[30vh] object-cover rounded-xl overflow-hidden cursor-pointer relative">
        <img :src="blogUrl+blog.featured_image" alt="" class="w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out">
      </figure>
    </NuxtLink>
    <div class="">
      <div class="text-gray-500 mt-2 mb-1 font-caveat text-lg">{{ $dayjs( blog.created_at).format('D MMM YYYY') }}</div>
      <span class="text-yellow-400 text-xs font-semibold">{{ blog.categories.title }}</span>
      <h2 class="text-xl font-semibold">{{ blog.title }}</h2>
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

