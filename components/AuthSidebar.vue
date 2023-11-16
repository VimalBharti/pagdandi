<template>
    <!-- Sidebar -->
    <div id="application-sidebar" class="w-[18%] py-10 border-r h-screen [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 flex flex-col justify-between">
      <div class="px-6">
        <!-- <a class="flex-none text-xl font-semibold dark:text-white" aria-label="Brand">Rufa</a> -->
      </div>

      <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
        <ul class="space-y-1.5">
          <li>
            <NuxtLink to="/admin/dashboard" class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <Icon name="radix-icons:dashboard" class="w-5 h-5" />
              Dashboard
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/admin/blogs" class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <Icon name="tabler:article" class="w-5 h-5" /> Blogs
          </NuxtLink></li>
          <li><NuxtLink to="/admin/blogs/add" class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <Icon name="streamline:interface-edit-write-2-change-document-edit-modify-paper-pencil-write-writing" class="w-5 h-5" />
            Add New Blog
          </NuxtLink></li>
          <li><NuxtLink to="/admin/category" class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <Icon name="material-symbols:category-outline-rounded" class="w-5 h-5" />
            Categories
          </NuxtLink></li>
          <li><a class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <Icon name="material-symbols:mail-outline" class="w-5 h-5" />
            Contact Form
          </a></li>
        </ul>

      </nav>

      <button class="w-full border rounded-xl mt-auto p-2" @click="logout">Logout</button>
    </div>
    <!-- End Sidebar -->
</template>

<script setup>
  const supabase = useSupabaseClient()
  const router = useRouter();

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    router.push({ path: "/" });
  }
</script>