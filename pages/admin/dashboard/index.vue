<template>
    <!-- Content -->
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 h-screen overflow-y-auto">
      sdsd
    </div>
    <!-- End Content -->
</template>

<script setup>
  definePageMeta({
    colorMode: 'light',
    middleware: 'auth',
    layout: 'auth'
  })

  const user = useSupabaseUser()


</script>

<style>

</style>

