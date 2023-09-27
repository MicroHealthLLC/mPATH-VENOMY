<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
import { store } from "../store"

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
  <v-card class="header">
    <v-layout >
      <v-app-bar  
        v-if=store.username   
        prominent       
      >      
        <RouterLink
          class="nav-link"
          :class="{ active: route.name === 'home' }"
          to="/"
          >
          <img alt="Microhealth logo" class="logo ml-3" src="@/assets/images/mh_logo.png" width="165"/>  
          </RouterLink
        >
        <v-spacer></v-spacer>   
        <nav>
        <RouterLink
          class="link mr-3"        
          to="/admin"
          >
          <v-tooltip text="Admin Panel" location="bottom">
            <template v-slot:activator="{ props }">
                <v-icon v-bind="props" class="mr-3">mdi-folder-wrench-outline</v-icon>
            </template>
            </v-tooltip>     
        </RouterLink
        >
        <RouterLink
          class="link mr-3"       
          to="/help"
          >
          <v-tooltip text="Help" location="bottom">
            <template v-slot:activator="{ props }">
                <v-icon v-bind="props" class="mr-3">mdi-help</v-icon>
            </template>
            </v-tooltip>
         
        </RouterLink
        >
        <span @click="logout" class="no-underline text-dark pr-1 cursor link" > 
          <v-tooltip text="Logout" location="bottom">
            <template v-slot:activator="{ props }">
                <v-icon v-bind="props" class="mr-4">mdi-logout</v-icon>
            </template>
            </v-tooltip>
       </span> 
       <RouterLink to="/profile"  class="no-underline text-dark mr-2"> 
        
          <v-avatar
              size="36px"
            >     
              <v-img             
                src="https://randomuser.me/api/portraits/women/85.jpg"
                :title="store.username"
              ></v-img>            
            </v-avatar>
       </RouterLink>    
        </nav>     
      </v-app-bar>
        </v-layout>
        </v-card> 


</template>
<style>
.cursor {
  cursor: pointer;
}  
.link{
  color: gray;
  text-decoration: none;
}
.header {
    margin-bottom: 6rem;
}

/* * {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 20px;
  background-color: #101014;
  color: #fff;
}

.header-title {
  flex: 1;
}

.header-nav {
  display: flex;
  gap: 12px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
}

.nav-link:hover {
  color: rgb(87, 87, 163);
}

.active {
  border-bottom: 2px solid #fff;
  padding-bottom: 5px;
} */

.logout {
  cursor: pointer;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
