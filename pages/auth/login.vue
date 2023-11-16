<template>
    <div class="flex h-screen relative">
        <img src="/images/login.jpeg" alt="" class="w-full h-full object-cover">
        <div class="absolute h-full w-[40vw] flex items-center justify-center top-0 right-0 px-20">
            <div class="bg-white/50 backdrop-blur-md p-10 rounded-xl space-y-4">
                <input type="email" placeholder="Email" class="rounded-xl p-3 w-full focus:outline-none" v-model="email">
                <input type="password" placeholder="Password" class="rounded-xl p-3 w-full focus:outline-none" v-model="password">
                <button class="bg-lime-400 text-zinc-800 rounded-xl w-full py-3 flex gap-2 items-center justify-center group" @click="signIn">
                    Login
                    <Icon v-if="loading" name="line-md:loading-twotone-loop" class="w-5 h-5" />
                    <Icon v-else name="solar:login-3-line-duotone" class="w-5 h-5" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        colorMode: 'light'
    })

    const supabase = useSupabaseClient()
    const router = useRouter();

    const email = ref('me@vimalbharti.com');
    const password = ref('eRIckson$000$');

    const errorMsg = ref('');

    const loading = ref(false)

    const signIn = async () => {
        try {
            loading.value = true;
            const { error } = await supabase.auth.signInWithPassword({
                email: email.value, 
                password: password.value,
            });
            loading.value = false;
            if(error) throw error;
            router.push({ path: "/dashboard" });
        } catch (error) {
            errorMsg.value = error.message
        }
    }

</script>

<style scoped>

</style>