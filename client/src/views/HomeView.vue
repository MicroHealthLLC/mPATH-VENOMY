<script>
import { mapActions, mapGetters } from "vuex";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountGroup } from '@mdi/js';
// import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiAccountGroup,
      numEmployees: 10,
      actions: ['TASKS', 'ISSUES', 'RISKS', 'LESONS'],
      colors: ['success', 'warning','error', 'info', ]
    };
  },
  mounted() {   
    this.fetchPrograms()
  },
  methods: {
    ...mapActions([
      "fetchPrograms",
    ]),
    addEmployees() {
      this.numEmployees++;
    },
    subtractEmployees() {
      this.numEmployees--;
    },
  },
  computed: {
      ...mapGetters([
      "programsStatus", 
      "getPrograms",
    ]),      
    },
};

</script>

<template>
  <div class="text-center mt-5 bt">
      <h4 >Welcome to</h4>
      <img alt="Microhealth logo" class="logo mx-auto" src="@/assets/images/mpath.svg" width="250"/>      
      
    <div class="text-center mt-5">
      <v-item-group selected-class="bg-primary">
      <v-container>
        <v-row>
          <v-col
            v-for="item, i in getPrograms"
            :key="i"
            cols="12"
            md="4"
          >
          <v-item v-slot="{ isSelected, selectedClass, toggle }">
            <RouterLink
              class="link mr-3"        
              :to="`/program/${i}`"
              >
             <v-card
              :class="['d-flex align-center', selectedClass]"
              dark
              height="300"  
              @click="toggle"   
            >    
              <v-container>
              <v-row no-gutters>
              <v-col>
                <v-sheet class="">
                  <div
                      class="text-h5 flex-grow-1 pb-3 text-left text-info"
                        >
                        {{ isSelected ? 'Selected' : item.name }}
                      </div>
                </v-sheet>
              </v-col>
              <v-divider class="pa-3"></v-divider>       
              <hr/>
              </v-row>
              <v-row no-gutters class="text-bold">
                <v-col>
                  <v-sheet class="text-left text-dark">
                  Actions
                  </v-sheet>
                </v-col>
                <v-col >
                  <v-sheet class="text-left pl-3">
                #
                  </v-sheet>
                </v-col>
                <v-col>
                  <v-sheet class="text-left">
                  Progress
                  </v-sheet>
                </v-col>
              </v-row>
              <v-row no-gutters v-for="n, i in actions" :key="i">
                <v-col cols="2" >
                  <v-sheet class="text-left">
                  {{ n  }}
                  </v-sheet>
                </v-col>
                <v-col>
                <v-badge 
                    :color="colors[i]"
                    content="12"
                    inline        
                  ></v-badge>
                </v-col>
                <v-col>
                  <!-- Progress -->
                  <v-sheet class="pa-3">
                    <v-progress-linear
                    model-value="90"
                    :color="colors[i]"
                    rounded
              ></v-progress-linear>
                  </v-sheet>
                </v-col>  
              </v-row>
              <v-card-actions>
                <v-list-item class="w-100">

                
                  <template v-slot:append>
                    <div class="justify-self-end">     
                      <i class="fa-regular fa-users mr-1"></i>
                      <span class="subheading mr-4">256</span>           
                      <i class="fa-regular fa-suitcase mr-1"></i>
                      <span class="subheading mr-4">45</span>
                      <i class="fa-regular fa-file-invoice mr-1"></i>
                      <span class="subheading">12</span>
                    </div>
                  </template>
                </v-list-item>
              </v-card-actions>
              </v-container>
             </v-card>
            </RouterLink> 
          </v-item>
          </v-col>
        </v-row>        
      </v-container>
    </v-item-group>
    </div>
  </div>
</template>
<style>
h4 {
  color: #DD9036;
  font-style: italic;
  font-weight: 400;
  margin-right: 5%;
  margin-bottom: -1.8%;
}
.bt {
  background-color: rgb(239, 242, 243);
}
.text-bold{
  font-weight: bold;
}
</style>