<template>
  <div class=" h-full w-full">
    <div class="h-screen overflow-y-auto">
        <!-- Header -->
        <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
            <!-- Input -->
            <div class="sm:col-span-1">
                <label for="hs-as-table-product-review-search" class="sr-only">Search</label>
                <div class="relative">
                    <input type="text" id="hs-as-table-product-review-search" name="hs-as-table-product-review-search" class="py-2 px-3 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:outline-gray-200" placeholder="Search" v-model="q">
                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                        <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </div>
                </div>
            </div>
            <!-- End Input -->
            <button @click="isOpen = true" class="text-sm font-bold">+ Add New</button>
        </div>
        <!-- End Header -->

        <!-- All Categories -->
        <div class="grid grid-cols-4 gap-6 p-12">
            <div class="overflow-hidden rounded-xl shadow bg-white" v-for="category in categories" :key="category.id">
                <img v-if="category.image" :src="publicUrl+category.image" alt="" class="h-[30vh] w-full object-cover">
                <section class="p-4">
                    <h3 class="text-xs text-zinc-600">{{ $dayjs(category.created_at).format('D MMM YYYY') }}</h3>
                    <h2 class="">{{ category.title }}</h2>
                    <div class="flex items-center justify-between border rounded-xl mt-4 shadow-inner overflow-hidden">
                        <button @click="editCategory(category.id)" class="text-sm flex items-center gap-1 w-full justify-center py-2 hover:bg-gray-100">
                            <Icon name="material-symbols:edit-square-outline" />
                            Edit
                        </button>
                        <button @click="deleteCategory(category.id)" class="text-sm flex items-center gap-1 w-full justify-center py-2 border-l hover:bg-red-50 hover:text-red-500">
                            <Icon name="material-symbols:delete-outline-rounded" />
                            Delete
                        </button>
                    </div>
                </section>
            </div>
        </div>

    </div>

    <!-- Add New Category -->
    <UModal v-model="isOpen">
      <div class="card">
        <div class="card-header flex items-center justify-between p-4 border-b text-sm">
            New Category
        </div>
        <div class="card-body px-4 py-6 space-y-2">
            <input type="text" class="p-3 rounded-xl border w-full focus:outline-none shadow-inner" placeholder="Category title" v-model="title">
            <figure class="w-full border rounded-xl overflow-hidden bg-gray-200" v-if="preview">
                <img :src="preview" alt="" class="rounded-t-xl h-[300px] w-full object-cover">
            </figure>
            <div class="w-full">
                <label for="featured" class="hover:bg-gray-50 w-full h-full flex items-center justify-center text-gray-600 cursor-pointer text-xs py-3 border-2 rounded-xl">{{ preview ? 'Change Image' : 'Select Image' }}</label>
                <input class="hidden featured" id="featured" type="file" @input.prevent="onSelectFile">
            </div>
            <button class="w-full rounded-xl bg-gray-900 text-white p-3 flex items-center justify-center gap-2" @click="addCategory">
                <span>{{ loading ? 'adding...' : 'Add' }}</span>
                <Icon v-if="loading" name="line-md:loading-twotone-loop" class="w-5 h-5" />
            </button>
        </div>
      </div>
    </UModal>

    <!-- Edit Category -->
    <UModal v-model="editModal">
      <div class="card">
        <div class="card-header flex items-center justify-between p-4 border-b text-sm">
            Edit Category
        </div>
        <div class="card-body px-4 py-6 space-y-6">
            <input type="text" class="p-3 rounded-xl border w-full focus:outline-none shadow-inner" placeholder="Category title" v-model="selectedRow.title">
            <figure class="w-full border rounded-xl overflow-hidden bg-gray-200" v-if="preview">
                <img :src="preview" alt="" class="rounded-t-xl h-[300px] w-full object-cover">
            </figure>
            <figure class="w-full border rounded-xl overflow-hidden bg-gray-200" v-else>
                <img :src="publicUrl+selectedRow.image" alt="" class="rounded-t-xl h-[300px] w-full object-cover">
            </figure>
            <div class="w-full">
                <label for="featured" class="hover:bg-gray-50 w-full h-full flex items-center justify-center text-gray-600 cursor-pointer text-xs py-3 border-2 rounded-xl">{{ preview ? 'Change Image' : 'Select Image' }}</label>
                <input class="hidden featured" id="featured" type="file" @input.prevent="onUpdateFile">
            </div>
            <button class="w-full rounded-xl bg-gray-900 text-white p-3 flex items-center justify-center gap-2" @click="updateData">
                <span>{{ loading ? 'adding...' : 'Add' }}</span>
                <Icon v-if="loading" name="line-md:loading-twotone-loop" class="w-5 h-5" />
            </button>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'light',
    middleware: 'auth',
    layout: 'auth'
  })
  const publicUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/category/')

  const supabase = useSupabaseClient()
  const router = useRouter();
  const user = useSupabaseUser()

  const loading = ref(false)
    const isOpen = ref(false)
    const editModal = ref(false)
    const selectedRow = ref({})

    const q = ref('')

    const preview = ref('')
    const selectedImage = ref(null)

    const title = ref('')
    const slug = ref('')
    const featured = ref('')

    const categories = ref([])

    const fetchData = async () => {
        let { data } = await supabase
        .from('categories')
        .select ('*')
        categories.value = data
    }
    fetchData()

    const onSelectFile = (e) => {
        const file = e.target.files[0];
        if(file){
            selectedImage.value = file;
            preview.value = URL.createObjectURL(file);
        }
    }
    const onUpdateFile = (e) => {
        const file = e.target.files[0];
        if(file){
            selectedImage.value = file;
            preview.value = URL.createObjectURL(file);
        }
    }

    const filteredRows = computed(() => {
        if (!q.value) {
            return categories.value
        }
        return categories.value.filter((cat) => {
            return Object.values(cat).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
            })
        })
    })

    const items = (row) => [
        [{
            label: 'Edit',
            icon: 'i-heroicons-pencil-square-20-solid',
            click: async () => {
                let { data, error } = await supabase
                    .from('categories')
                    .select()
                    .eq('id', row.id)
                    .single()
                selectedRow.value = data
                editModal.value = true
            }
        }, {
            label: 'Duplicate',
            icon: 'i-heroicons-document-duplicate-20-solid'
        }],  
        [{
            label: 'Delete',
            icon: 'i-heroicons-trash-20-solid',
            click: async () => {
                await supabase.from('categories').delete().eq('id', row.id)
                await supabase.storage.from('category').remove(row.image)
                fetchData()
                toast.add({ title: 'Data Deleted' })
            }
        }]
    ]

    const deleteCategory = async (id) => {
        let { data } = await supabase
            .from('categories')
            .select()
            .eq('id', id)
        await supabase.storage.from('category').remove(data.image)
        await supabase.from('categories').delete().eq('id', id)
        fetchData()
    }
    const editCategory = async (id) => {
        let { data, error } = await supabase
            .from('categories')
            .select()
            .eq('id', id)
            .single()
        selectedRow.value = data
        editModal.value = true
    }

    const addCategory = async () => {
        convertToSlug()
        try {
            loading.value = true;
            if(selectedImage.value){
                const file = selectedImage.value;
                const fileExt = file.name.split(".").pop();
                const fileName = `${Math.random()}.${fileExt}`;
                featured.value = fileName;

                let { error: uploadError } = await supabase.storage
                    .from('category').upload(fileName, selectedImage.value);
            }
            const { error } = await supabase
                .from('categories')
                .insert({ 
                        title: title.value,
                        slug: slug.value,
                        image: featured.value
                })
        } catch (error) {
            console.log(error)
        } finally {
            loading.value = false;
            fetchData()
            isOpen.value = false
        }
    }
    const updateData = async () => {
        updateConvertToSlug()
        try {
            loading.value = true;    
            if(selectedImage.value){
                const file = selectedImage.value;
                const fileExt = file.name.split(".").pop();
                const fileName = `${Math.random()}.${fileExt}`;
                selectedRow.value.image = fileName;

                let { error: uploadError } = await supabase.storage
                    .from('category').upload(fileName, selectedImage.value);
            }
            const { error } = await supabase
                .from('categories')
                .update({ 
                    title: selectedRow.value.title,
                    slug: selectedRow.value.slug,
                    image: selectedRow.value.image,
                })
                .eq('id', selectedRow.value.id)
                .select()
        } catch (error) {
            console.log(error)
        } finally {
            loading.value = false;
            editModal.value = false;
            fetchData();
        }

    }

    const convertToSlug = () => {
        var theSlug = title.value
        theSlug = theSlug.toLowerCase();
        theSlug = theSlug.replace(/\s+/g, '-')
        theSlug = theSlug.replace(/&/g, 'and')
        slug.value = theSlug
    }
    const updateConvertToSlug = () => {
        var theSlug = selectedRow.value.title
        theSlug = theSlug.toLowerCase();
        theSlug = theSlug.replace(/\s+/g, '-')
        theSlug = theSlug.replace(/&/g, 'and')
        selectedRow.value.slug = theSlug
    }
</script>

<style>

</style>

