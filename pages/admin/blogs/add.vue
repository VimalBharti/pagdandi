<template>
  <main class="flex w-full h-screen">
    <div class="w-[65%] h-full">
      <Editor
        class="h-screen"
        api-key="3qch3bp40adh8e8z89h2gbm5hm2zu0v9289qrgbyxh2kysab"
        output-format="html"
        v-model="content"
        :init="{
            branding: false,
            placeholder: 'Let\'s write an awesome article',
            menubar: true,
            plugins: 'quickbars anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount save',
            toolbar: 'undo redo | blocks fontfamily fontsize | styles | bold italic underline strikethrough textcolor | link image media table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            quickbars_insert_toolbar: 'quicktable quickimage     media codesample',
            content_style: `
                body { margin: 2rem 5%; }
            `,
            elementpath: false,
            content_css: 'writer',
            automatic_uploads: true,
            images_file_types: 'jpg,svg,webp,png,gif',
            file_picker_types: 'image',
        }"
      />
    </div>

    <aside class="w-[35%] h-screen overflow-y-auto">
      <div class="p-6">
        <h5 class="text-xs mb-1 text-zinc-700 font-semibold">English title</h5>
        <input type="text" placeholder="English Article title" v-model="title" class="w-full p-2.5 rounded-xl border border-b mb-4">
        <h5 class="text-xs mb-1 text-zinc-700 font-semibold">Hindi title</h5>
        <input type="text" placeholder="Hindi Article title" v-model="hind_title" class="w-full p-2.5 rounded-xl border border-b">
      </div>
      <div class="p-6 border-t">
        <section class="space-y-4">
            <USelectMenu
                searchable
                searchable-placeholder="Search category..."
                class="w-full border rounded-xl"
                placeholder="Select category"
                variant="none"
                :options="categories"
                option-attribute="title"
                v-model="category_id"
                size="xl"
            />
            <USelect
                placeholder="Status"
                v-model="status"
                color="gray"
                variant="none"
                size="xl"
                class="border rounded-xl"
                :options="['Draft', 'Published']"
            />
        </section>
      </div>

      <div class="p-6 border-t">
        <section class="">
          <h5 class="text-xs mb-1 text-zinc-700 font-semibold">Featured Image</h5>
          <figure class="w-full border rounded-xl overflow-hidden bg-gray-200" v-if="preview">
              <img :src="preview" alt="" class="rounded-t-xl h-[180px] w-full object-cover hover:grayscale transition duration-700 ease-in-out ">
          </figure>
          <div class="w-full mt-1">
              <label for="featured" class="hover:bg-gray-50 w-full h-full flex items-center justify-center text-gray-600 cursor-pointer text-xs py-3 border rounded-xl">{{ preview ? 'Change Image' : 'Select Image' }}</label>
              <input class="hidden featured" id="featured" type="file" @input.prevent="onSelectFile">
          </div>
        </section>

        <section class="mt-5">
            <h5 class="text-xs mb-1 text-zinc-700 font-semibold">Meta SEO</h5>
            <textarea class="w-full border rounded-xl p-3 focus:outline-none" placeholder="Meta description for SEO" rows="6" v-model="meta_seo"></textarea>
            <!-- Is featured post -->
            <UCheckbox v-model="featured_post" name="notifications" label="Featured post" class="mt-3" />
        </section>

        <button class="w-full mt-5 border rounded-xl py-3 bg-zinc-100 hover:bg-zinc-800 hover:text-zinc-100 text-sm" @click="addData">
            <span class="">{{ loading ? 'publishing...' : 'Publish Blog' }}</span>
            <Icon v-if="loading" name="line-md:loading-twotone-loop" class="w-5 h-5" />
        </button>
      </div>

    </aside>

  </main>
</template>

<script setup>
  import Editor from '@tinymce/tinymce-vue'

  definePageMeta({
    colorMode: 'light',
    middleware: 'auth',
    layout: 'auth'
  })

  const supabase = useSupabaseClient()

  const loading = ref(false)
  const preview = ref('')
  const selectedImage = ref(null)

  const title = ref('')
  const hind_title = ref('')
  const slug = ref('')
  const meta_seo = ref('')
  const featured = ref('')
  const featured_post = ref(false)
  const views = ref(0)
  const status = ref('')
  const readingTime = ref()
  const word_count = ref()
  const content = ref('')
  const category_id = ref(null)

  let { data: categories, error } = await supabase
    .from('categories')
    .select('*')

    const addData = async () => {
      convertToSlug()
      try {
          loading.value = true;
          if(selectedImage.value){
              const file = selectedImage.value;
              const fileExt = file.name.split(".").pop();
              const fileName = `${Math.random()}.${fileExt}`;
              featured.value = fileName;

              let { error: uploadError } = await supabase.storage
                  .from('blogs').upload(`featured/${fileName}`, selectedImage.value);
          }
          const { error } = await supabase
              .from('blogs')
              .insert({ 
                  title: title.value,
                  hind_title: hind_title.value,
                  slug: slug.value,
                  meta_seo: meta_seo.value,
                  content: content.value,
                  featured_image: featured.value,
                  featured_post: featured_post.value,
                  views: views.value,
                  status: status.value,
                  reading_time: readingTime.value,
                  word_count: word_count.value,
                  category_id: category_id.value.id
              })
              loading.value = false;
          } catch (error) {
              console.log(error)
      }
  }

  const onSelectFile = (e) => {
    const file = e.target.files[0];
    if(file){
        selectedImage.value = file;
        preview.value = URL.createObjectURL(file);
    }
  }

  const convertToSlug = () => {
      var theSlug = title.value
      theSlug = theSlug.toLowerCase();
      theSlug = theSlug.replace(/\s+/g, '-')
      theSlug = theSlug.replace(/&/g, 'and')
      slug.value = theSlug
  }
</script>

<style scoped>
@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }
}
</style>