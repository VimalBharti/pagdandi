export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
    const router = useRouter();
    
    if (!user.value) {
      // return navigateTo('/auth/login')
      router.push({ path: "/auth/login" });
    }
})