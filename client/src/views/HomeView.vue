<script>
export default {
  data() {
    return {
      numEmployees: 10,
    };
  },
  methods: {
    addEmployees() {
      this.numEmployees++;
    },
    subtractEmployees() {
      this.numEmployees--;
    },
  },
};

</script>

<template>
  <div class="text-center mt-5">
        <h4 >Welcome to</h4>
        <img alt="Microhealth logo" class="logo mx-auto" src="@/assets/images/mpath.svg" width="250"/>      
        
    <div class="text-center mt-5">
    <v-item-group selected-class="bg-primary">
    <v-container>
      <v-row>
        <v-col
          v-for="n in 6"
          :key="n"
          cols="12"
          md="4"
        >
          <v-item v-slot="{ isSelected, selectedClass, toggle }">
          <RouterLink
          class="link mr-3"        
          :to="`/program/${n}`"
          >
            <v-card
              :class="['d-flex align-center', selectedClass]"
              dark
              height="200"  
              @click="toggle"   
            >
              <div
                class="text-h3 flex-grow-1 text-center"
              >
                {{ isSelected ? 'Selected' : 'Program' + n }}
              </div>
            </v-card>
          </RouterLink> 
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  </div>
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