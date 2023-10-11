<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountGroup } from '@mdi/js';
export default { 
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiAccountGroup,
    }
  }
}
</script>

<template>
  <div class="text-center mt-3">
    <v-app>
      <h4 class="text-left">Welcome to the Admin Panel</h4>    
    <div class="container">
        <router-view />
    </div>
    <v-bottom-navigation grow>
      
        <v-btn to="/admin/users" class="link">
            <svg-icon type="mdi" :path="path"></svg-icon>
            <span class="link-text">Users</span>
        </v-btn>
        <v-btn value="user-group">
            <svg-icon type="mdi" :path="path"></svg-icon>
            <span>Programs</span>
        </v-btn>
        <v-btn value="user-group">
            <svg-icon type="mdi" :path="path"></svg-icon>
            <span>Projects</span>
        </v-btn>
        <v-btn value="user-group">
            <svg-icon type="mdi" :path="path"></svg-icon>
            <span>Tasks</span>
        </v-btn>
        <v-btn value="favorites">
            <v-icon>mdi-heart</v-icon>

            <span>Issues</span>
        </v-btn>
        <v-btn value="nearby">
            <v-icon>mdi-map-marker</v-icon>

            <span>Risks</span>
        </v-btn>
        <v-btn value="nearby">
            <v-icon>mdi-map-marker</v-icon>

            <span>Effort</span>
        </v-btn>
    </v-bottom-navigation>         
    </v-app>
   
      
    </div>
  <!-- <main>
    <h1>Welcome {{ store?.username || 'Comrade' }}</h1>
  </main> -->
</template>
<style>
h4 {
  color: #DD9036;
  font-style: italic;
  font-weight: 400;
  margin-right: 5%;
  margin-bottom: -1.8%;
}
</style>