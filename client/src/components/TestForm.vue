<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    data: () => ({
      valid: false,
      description: '',
      program: {
        name: '',
        description: ''
      },
     }),
    mounted() {
     console.log(this.program)
     this.fetchPrograms()
    },
    methods: {
      ...mapActions([
      "createProgram", 
      "fetchPrograms",
      "deleteProgram",
      "deleteAllPrograms"
    ]),
    ...mapMutations([
      "SET_PROGRAM_STATUS"
    ]),
    removeProgram(id) {
      this.deleteProgram(id);
    },
    removeAllPrograms() {
      this.deleteAllPrograms();
    },
    saveProgram() {
        let program = {
          name: this.program.name,
          description: this.program.description
        }   
      this.createProgram(program)
      setTimeout(() => {
          this.$refs.form.reset();
        }, 1500);
      },      
    },
    computed: {
      ...mapGetters([
      "programsStatus", 
      "getPrograms",
    ]),      
    },
    watch : {
      programsStatus: {
      handler() {
        if (this.programsStatus == 200) {
          alert("Program action successful")
          this.SET_PROGRAM_STATUS(0);
          this.fetchPrograms();
        }
      },
    },
    }
  }
</script>
<template>
  <div class="container">
    <v-form v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="program.name"     
            label="Program Name"
            required
            hide-details
            variant="outlined"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
        <v-textarea 
          label="Description"   
          v-model="program.description" 
          variant="outlined">
        </v-textarea>     
        </v-col>

       <v-btn type="button" color="success"  class="mr-3" @click="saveProgram">Save</v-btn>
       <v-btn type="button" color="error" @click="removeAllPrograms">DESTROY ALL</v-btn>
      </v-row>

    </v-container>
  </v-form>
  <!-- <span v-if="getPrograms && getPrograms.length > 0">
    {{ getPrograms  }}
  </span> -->
  <v-table >
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
         Description
        </th>
      </tr>
    </thead>
    <tbody v-if="getPrograms && getPrograms.length > 0">
        <tr v-for="item in getPrograms" :key="item.name">
          <td class="text-left">{{ item.name }}</td>
          <td class="text-left">{{ item.description }}</td>
          <td class="text-left">
            <v-btn color="error" @click="removeProgram(item.id)">
              Delete
            </v-btn>
          </td>
        </tr>
      </tbody>
    <tbody v-else>
      <tr>
        <td colspan="2"></td>
       
      </tr>
    </tbody>
  </v-table>
  </div>
</template>

<style scoped>

</style>
