<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
import { store } from "./store";
import NavBar from "./components/NavBar.vue";

const router = useRouter();
const route = useRoute();
const logout = async () => {
  localStorage.clear();
  store.updateHasLogin(false);
  store.updateName(null);
  router.push("/login");
};
</script>

<template>  
  <div>
    <NavBar/>
    <router-view v-slot="{ Component}" class="header-gap">
      <!-- Use any custom transition and  to `fade` -->
        <component :is="Component" :key="$route.path" />  
    </router-view>
  </div>
</template>

<style>
.header-gap {
  padding-top: 6rem;
}
</style>
