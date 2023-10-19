import axios from "axios";
const baseUrl = "http://localhost:3000/programs";

const programStore = {
    state: () => ({
    program: {},  
    programs:[],
    programs_loaded: true,
    program_status: 0, 
    }),
    actions: {
      async createProgram({ commit }, program) {
        commit("TOGGLE_PROGRAMS_LOADED", false);
        try {
          const response = await axios.post(`${baseUrl}/createprogram`, {
            program,
          });
          console.log("createProgramStoreResponse: ", response.data);
          commit("SET_PROGRAM", response.data.program);
          commit("SET_PROGRAM_STATUS", response.status);
        } catch (err) {
          console.log(err);
        } finally {
          commit("TOGGLE_PROGRAMS_LOADED", true);
        }
      },
      async fetchPrograms({ commit }) {
        commit("TOGGLE_PROGRAMS_LOADED", false);
        try {
          const response = await axios.get(`${baseUrl}`);
          console.log(response.data);
          commit("SET_PROGRAMS", response.data);
          return response.data;
        } catch (err) {
          console.error("Error fetching programs:", err);
          return [];
        } finally {
          commit("TOGGLE_PROGRAMS_LOADED", true);
        }
      },
      async deleteProgram({ commit }, programId) {
        try {
          const response = await axios.delete(`${baseUrl}/deleteprogram/${programId}`);
          console.log("deleteProgramStoreResponse: ", response.data);
          commit("SET_PROGRAM_STATUS", response.status);
        } catch (err) {
          console.log(err);
        }
      },
      async deleteAllPrograms() {
        try {
          const response = await axios.delete(`${baseUrl}/deleteallprograms`);
          console.log("deleteAllProgramsStoreResponse: ", response.data);
          // Additional logic if needed
        } catch (err) {
          console.log(err);
        }
      },
    },
    mutations: {
      SET_PROGRAM: (state, value) => (state.program = value),
      SET_PROGRAMS: (state, value) => (state.programs = value),
      SET_PROGRAM_STATUS: (state, status) => (state.program_status = status),
      TOGGLE_PROGRAMS_LOADED: (state, loaded) => (state.programs_loaded = loaded),
    },
    getters: {
      getProgram: (state) => state.program,
      getPrograms: (state) => state.programs,
      programsLoaded: (state) => state.programs_loaded,
      programsStatus: (state) => state.program_status,
    },
  };
  
  export default programStore;