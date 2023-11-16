<template>
  <div class="w-full h-screen">
    <div class="global-cover bg-fixed" style="background-image:url('/images/nature_2.jpeg')"></div>

    <div class="absolute top-20 left-20">
      <span class="font-bold text-6xl text-gray-800 font-caveat">Say</span> <br/>
      <span class="font-bold text-6xl ml-5 font-caveat text-gray-800">Hello</span>
    </div>

    <section class="w-full h-full flex justify-center items-center">
      <div class="max-w-lg w-full bg-white/75 backdrop-blur rounded-xl mx-auto p-12">
        <div class="flex items-end w-full justify-center">
          <span class="w-full">hello <span class="font-cairo font-bold text-xl">rufa</span>, my name is</span>
          <input type="text" placeholder="you name" class="p-1 w-full border-b border-green-800 focus:outline-none bg-transparent focus:border-lime-800 text-lime-800" v-model="name">
        </div>
        <div class="my-3">and my message is</div>
        <textarea rows="5" class="w-full border-b bg-transparent border-green-800 text-lime-800 focus:border-green-800 focus:outline-none" placeholder="your message" v-model="message"></textarea>
        <div class="flex items-end w-full gap-1 mt-3">
          <span class="w-full">You can reach me at</span>
          <input type="text" placeholder="your email address" class="p-1 w-full border-b border-green-800 focus:outline-none bg-transparent focus:border-green-800 text-lime-800" v-model="email">
        </div>
        <button class="bg-zinc-800 text-white px-6 py-2 rounded-xl mt-12 ml-auto flex items-center gap-2" @click="sendForm">
          {{ loading ? 'Sending...' : 'Send' }}
          <Icon v-if="loading" name="line-md:loading-twotone-loop" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'light'
  })

  useHead({
    title: 'RuFa - Contact Us',
    meta: [
      { name: 'description', content: 'rufa - nature, health culture, history, literature blogs and podcasts' }
    ]
  })

  const supabase = useSupabaseClient();

  const loading = ref(false);
  const name= ref('')
  const email= ref('')
  const message= ref('')

  const sendForm = async () => {
    loading.value = true;
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        { 
          name: name.value, 
          email: email.value, 
          message: message.value
        },
      ])
      .select() 
    loading.value = false;
    name.value = '', 
    email.value = '', 
    message.value = ''
  } 
</script>

<style scoped>
.global-cover {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    height: 80vh;
    background: no-repeat center center/cover;
    -webkit-mask-image: linear-gradient(to top,transparent,rgba(0,0,0,.013) 8.1%,rgba(0,0,0,.049) 15.5%,rgba(0,0,0,.104) 22.5%,rgba(0,0,0,.175) 29%,rgba(0,0,0,.259) 35.3%,rgba(0,0,0,.352) 41.2%,rgba(0,0,0,.45) 47.1%,rgba(0,0,0,.55) 52.9%,rgba(0,0,0,.648) 58.8%,rgba(0,0,0,.741) 64.7%,rgba(0,0,0,.825) 71%,rgba(0,0,0,.896) 77.5%,rgba(0,0,0,.951) 84.5%,rgba(0,0,0,.987) 91.9%,#000);
    mask-image: linear-gradient(to top,transparent,rgba(0,0,0,.013) 8.1%,rgba(0,0,0,.049) 15.5%,rgba(0,0,0,.104) 22.5%,rgba(0,0,0,.175) 29%,rgba(0,0,0,.259) 35.3%,rgba(0,0,0,.352) 41.2%,rgba(0,0,0,.45) 47.1%,rgba(0,0,0,.55) 52.9%,rgba(0,0,0,.648) 58.8%,rgba(0,0,0,.741) 64.7%,rgba(0,0,0,.825) 71%,rgba(0,0,0,.896) 77.5%,rgba(0,0,0,.951) 84.5%,rgba(0,0,0,.987) 91.9%,#000);
    opacity: 0.6;
}
</style>

