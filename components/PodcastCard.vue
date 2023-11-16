<template>
  <div class="w-full bg-white rounded-xl shadow overflow-hidden">
    <NuxtLink :to="`/pod/${blog.slug}`" class="relative">
      <figure class="w-full h-[50vh] object-cover rounded-xl overflow-hidden cursor-pointer relative">
        <img :src="blogUrl+blog.featured_image" alt="" class="w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out hover:grayscale">
      </figure>
      <div class="card-text px-8 pt-12 pb-5 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black ">
        <h2 class="text-2xl font-semibold font-cairo text-yellow-500">{{ blog.title }}</h2>
        <div class="text-gray-300 font-caveat text-sm">{{ $dayjs( blog.created_at).format('D MMM YYYY') }}</div>
      </div>
    </NuxtLink>
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

