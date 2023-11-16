<template>
    <nav class="fixed bottom-5 left-2 right-2 z-20">
      <div class="max-w-sm w-full mx-auto bg-white/50 shadow-inner border backdrop-blur rounded-full p-2 flex justify-between items-center">
        <NuxtLink to="/" class="bg-white/75 rounded-full border border-white">
          <img src="/images/logo.png" alt="rufa-logo" class="w-12 rounded-full">
        </NuxtLink>
        <div class="flex items-center gap-3 text-sm">
          <NuxtLink to="/pod" class="flex items-center gap-1 bg-gray-100/50 rounded-full px-3 py-2 text-zinc-800">
            <Icon name="ic:outline-article" class="h-4 w-4" />
            <span>Articles</span>
          </NuxtLink>
          <NuxtLink to="/contact" class="flex items-center gap-1 bg-gray-100/50 rounded-full px-3 py-2 text-zinc-800">
            <Icon name="ic:outline-mail" class="h-4 w-4" />
            <span>Contact</span>
          </NuxtLink>
          <NuxtLink to="/pod/cast" class="flex items-center justify-center bg-white/50 border rounded-full h-12 w-12 text-zinc-700 hover:text-yellow-600">
            <Icon name="solar:podcast-bold" class="h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </nav>
</template>